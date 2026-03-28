declare module "three/examples/jsm/tsl/display/BloomNode.js" {
  /** TSL bloom pass — tipos mínimos; o runtime vem de three/webgpu. */
  export function bloom(
    scenePassColor: object,
    strength?: number,
    radius?: number,
    threshold?: number
  ): object;
}
