"use client";

import { Canvas, extend, useFrame, useThree, type RootState } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
  Component,
  type ErrorInfo,
  type ReactNode,
} from "react";
import type { Group, Mesh } from "three";
import { ChevronDown } from "lucide-react";
import { landingHeroScrollCue, primaryCtaHero } from "@/lib/landingStyles";
import * as THREE_NS from "three/webgpu";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add,
} from "three/tsl";
import { hero, getContactHref, getContactAnchorProps } from "@/content/v0";
import { useIsMobile } from "@/hooks/useMobile";

const THREE = THREE_NS;
const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" };
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" };

/** Deslocamento da mesh em resposta ao rato (parallax 3D). */
const PARALLAX_POS_X = 0.38;
const PARALLAX_POS_Y = 0.28;
const PARALLAX_ROT_Y = 0.14;
const PARALLAX_ROT_X = 0.09;
const PARALLAX_LERP = 0.07;

/** Parallax inverso no overlay (px, máximo). */
const OVERLAY_PARALLAX_PX = 14;

/** Desloca o blob para baixo (espaço mundo) para libertar a faixa do kicker. */
const MESH_BASE_Y = -0.2;

extend(THREE as unknown as Parameters<typeof extend>[0]);

type WebGpuGLOptions = ConstructorParameters<typeof THREE_NS.WebGPURenderer>[0];

function PostProcessing({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(
      gl as unknown as THREE_NS.WebGPURenderer
    );
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode("output");
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold) as typeof scenePassColor;

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const redOverlay = vec3(1, 0, 0).mul(oneMinus(scanLine)).mul(0.4);

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, redOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    const final = withScanEffect.add(bloomPass);
    postProcessing.outputNode = final;
    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    void render.renderAsync();
  }, 1);

  return null;
}

const WIDTH = 300;
const HEIGHT = 300;

type SceneProps = {
  /** Desativa movimento de parallax na mesh (acessibilidade). */
  reduceMotion: boolean;
};

function Scene({ reduceMotion }: SceneProps) {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const smoothPointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) setVisible(true);
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);
    const strength = 0.012;
    const tDepthMap = texture(depthMap);
    const tMap = texture(rawMap, uv().add(tDepthMap.r.mul(uPointer).mul(strength)));

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);
    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);
    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);
    const flow = oneMinus(
      smoothstep(float(0), float(0.02), abs(tDepthMap.r.sub(uProgress)))
    );
    const mask = dot.mul(flow).mul(vec3(10, 0, 0));
    const final = blendScreen(tMap, mask);

    const mat = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return { material: mat, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock, pointer }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    uniforms.uPointer.value = pointer;

    const mesh = meshRef.current;
    if (mesh?.material && "opacity" in mesh.material) {
      const mat = mesh.material as { opacity: number };
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
    }

    const g = groupRef.current;
    if (!g || reduceMotion) {
      if (g && reduceMotion) {
        g.position.set(0, MESH_BASE_Y, 0);
        g.rotation.set(0, 0, 0);
      }
      return;
    }

    smoothPointer.current.x = THREE.MathUtils.lerp(
      smoothPointer.current.x,
      pointer.x,
      PARALLAX_LERP
    );
    smoothPointer.current.y = THREE.MathUtils.lerp(
      smoothPointer.current.y,
      pointer.y,
      PARALLAX_LERP
    );
    const px = smoothPointer.current.x;
    const py = smoothPointer.current.y;
    g.position.x = px * PARALLAX_POS_X;
    g.position.y = py * PARALLAX_POS_Y + MESH_BASE_Y;
    g.rotation.y = px * PARALLAX_ROT_Y;
    g.rotation.x = -py * PARALLAX_ROT_X;
  });

  const scaleFactor = 0.34;
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
        <planeGeometry />
      </mesh>
    </group>
  );
}

function HeroOverlay({
  kicker,
  titleWords,
  subtitle,
  contactHref,
  contactAnchorProps,
  parallax,
  reduceMotion,
}: {
  kicker: string;
  titleWords: string[];
  subtitle: string;
  contactHref: string;
  contactAnchorProps: { target?: "_blank"; rel?: string };
  parallax: { x: number; y: number };
  reduceMotion: boolean;
}) {
  const tx = reduceMotion ? 0 : parallax.x * OVERLAY_PARALLAX_PX;
  const ty = reduceMotion ? 0 : parallax.y * OVERLAY_PARALLAX_PX;

  const scrollToProblem = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById("problema");
      el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    },
    [reduceMotion]
  );

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 isolate flex h-svh w-full flex-col items-center justify-center pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:pl-[max(2.5rem,env(safe-area-inset-left,0px))] md:pr-[max(2.5rem,env(safe-area-inset-right,0px))] [transform:translateZ(0)]">
      <div
        className="flex flex-col items-center will-change-transform"
        style={{
          transform: `translate3d(${-tx}px, ${-ty}px, 0)`,
        }}
      >
        <div className="pointer-events-auto relative mx-auto w-full max-w-5xl rounded-2xl border border-white/15 bg-black/40 px-5 py-6 text-center shadow-[0_0_48px_rgba(0,0,0,0.35)] sm:py-8 md:px-10 md:py-10">
          <p className="mx-auto mb-5 inline-block max-w-full border-l-2 border-primary bg-black/45 px-3 py-1.5 text-center text-xs font-mono font-semibold uppercase tracking-[0.2em] text-zinc-100 normal-case">
            {kicker}
          </p>
          <h1 className="m-0 mx-auto w-full text-balance text-center font-display text-3xl font-extrabold uppercase text-white md:text-5xl xl:text-7xl [text-shadow:0_2px_20px_rgba(0,0,0,0.95),0_1px_2px_rgba(0,0,0,0.8)]">
            <span className="flex w-full flex-wrap justify-center gap-x-2 gap-y-1 text-center lg:gap-x-4">
              {titleWords.map((word, index) => (
                <span key={`${word}-${index}`}>{word}</span>
              ))}
            </span>
          </h1>
          <p className="m-0 mx-auto mt-6 max-w-3xl px-2 text-balance text-center text-sm font-medium normal-case text-zinc-200 sm:text-base md:text-xl xl:text-2xl [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_1px_2px_rgba(0,0,0,0.85)]">
            {subtitle}
          </p>

          <div className="relative mt-10 flex flex-col items-center">
            <a
              href={contactHref}
              className={primaryCtaHero}
              aria-label={`${hero.ctaLabel} — abre WhatsApp`}
              {...contactAnchorProps}
            >
              {hero.ctaLabel}
            </a>

            <a
              href="#problema"
              onClick={scrollToProblem}
              className={landingHeroScrollCue}
              aria-label={`${hero.scrollCue} — ir para a secção seguinte`}
            >
              {hero.scrollCue}
              <ChevronDown className="size-5 shrink-0 motion-safe:animate-bounce" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FallbackBackdrop() {
  return (
    <div
      className="absolute inset-0 size-full bg-background bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#1a1a1a_0%,#000000_65%)]"
      aria-hidden
    />
  );
}

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("[HeroFuturistic] Canvas error, usando fallback estático.", error, info);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function WebGpuCanvas({
  reduceMotion,
  dpr,
}: {
  reduceMotion: boolean;
  dpr: number | [number, number];
}) {
  const onCreated = (state: RootState) => {
    void (state.gl as unknown as THREE_NS.WebGPURenderer).setClearColor(0x000000, 1);
  };

  const createGl = async (props: object) => {
    const renderer = new THREE.WebGPURenderer(props as WebGpuGLOptions);
    await renderer.init();
    return renderer;
  };

  return (
    <Canvas
      className="pointer-events-auto absolute inset-0 z-0 size-full h-svh min-h-svh w-full touch-none"
      dpr={dpr}
      flat
      gl={createGl as never}
      onCreated={onCreated}
      aria-label="Visualização 3D decorativa"
      role="img"
    >
      <PostProcessing fullScreenEffect />
      <Scene reduceMotion={reduceMotion} />
    </Canvas>
  );
}

export function HeroFuturistic() {
  const titleWords = hero.titleLine.split(" ");
  const contactHref = getContactHref();
  const contactAnchorProps = getContactAnchorProps();

  const [webGpuProbe, setWebGpuProbe] = useState<"pending" | "ok" | "no">("pending");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [canvasDprReady, setCanvasDprReady] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    setCanvasDprReady(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const el = headerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w = Math.max(rect.width, 1);
      const h = Math.max(rect.height, 1);
      const x = ((e.clientX - rect.left) / w) * 2 - 1;
      const y = ((e.clientY - rect.top) / h) * 2 - 1;
      setParallax({ x, y });
    },
    [reduceMotion]
  );

  const onMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (typeof navigator === "undefined" || !navigator.gpu) {
        if (!cancelled) setWebGpuProbe("no");
        return;
      }
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!cancelled) setWebGpuProbe(adapter ? "ok" : "no");
      } catch {
        if (!cancelled) setWebGpuProbe("no");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const canvasDpr: number | [number, number] = !canvasDprReady ? 1 : isMobile ? 1 : [1, 2];

  return (
    <header
      ref={headerRef}
      className="relative z-[1] isolate h-svh w-full overflow-visible bg-transparent"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 h-svh min-h-svh w-full"
        aria-hidden
      >
        {webGpuProbe === "pending" && <FallbackBackdrop />}
        {webGpuProbe === "no" && <FallbackBackdrop />}
        {webGpuProbe === "ok" && (
          <CanvasErrorBoundary fallback={<FallbackBackdrop />}>
            <WebGpuCanvas reduceMotion={reduceMotion} dpr={canvasDpr} />
          </CanvasErrorBoundary>
        )}
      </div>

      {webGpuProbe === "pending" && (
        <div
          className="absolute top-[calc(1.5rem+env(safe-area-inset-top,0px))] right-[calc(1.5rem+env(safe-area-inset-right,0px))] z-[120] flex items-center gap-2 text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <span className="sr-only">A preparar visual</span>
          <span
            className="h-5 w-5 rounded-full border-2 border-muted border-t-primary animate-spin"
            aria-hidden
          />
        </div>
      )}

      <HeroOverlay
        kicker={hero.kicker}
        titleWords={titleWords}
        subtitle={hero.subtitle}
        contactHref={contactHref}
        contactAnchorProps={contactAnchorProps}
        parallax={parallax}
        reduceMotion={reduceMotion}
      />
    </header>
  );
}

export default HeroFuturistic;
