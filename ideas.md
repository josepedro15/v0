# Brainstorm de Design: Landing Page V0

## Abordagem Escolhida: Tech-Brutalism Noir

Após análise das instruções, escolhi a abordagem **Tech-Brutalism Noir** como filosofia de design dominante. Esta estética combina minimalismo obscuro da Apple com a agressividade de conversão da Cimed, criando uma identidade visual que comunica poder, precisão e controle.

---

## Filosofia de Design Selecionada

### Design Movement
**Tech-Brutalism Noir** - Uma fusão de brutismo digital com minimalismo corporativo, remetendo a painéis de controle, terminais e código. Visual pesado, geométrico e intencional.

### Core Principles
1. **Densidade Visual**: Tipografia pesada e geométrica que transmite autoridade técnica
2. **Contraste Agressivo**: Preto absoluto (#000000) vs. Amarelo vibrante (#FFE600) para máxima legibilidade e impacto
3. **Minimalismo Funcional**: Apenas elementos essenciais; cada pixel tem propósito
4. **Agressividade de Conversão**: CTAs dominantes, hierarquia clara, sem distrações

### Color Philosophy
- **Fundo Primário**: Preto absoluto (#000000) - transmite sofisticação, controle e foco
- **Fundo Secundário**: Cinza muito escuro (#111111) - para cards e seções, criando profundidade
- **Accent (CTA)**: Amarelo vibrante (#FFE600) - agressivo, impossível de ignorar, convida ação
- **Tipografia**: Branco puro (#FFFFFF) para títulos, Cinza claro (#E5E5E5) para corpo
- **Efeito**: Monochromático com um único ponto de cor que domina toda a atenção

### Layout Paradigm
- **Hero**: Full-screen 3D com animações que ocupam 100vh
- **Seções**: Assimetria deliberada com cards flutuantes sobre fundo preto
- **Fluxo**: Vertical com transições suaves, sem grids centrados genéricos
- **Espaçamento**: Generoso, criando "respiro" entre seções

### Signature Elements
1. **Linhas Geométricas Sutis**: Bordas minimalistas em cards (#222222)
2. **Efeito Glow**: Amarelo com leve bloom em CTAs (hover state)
3. **Tipografia Monoespacial**: Para destaques técnicos (Roboto Mono, Space Grotesk)

### Interaction Philosophy
- **Hover States**: Transições suaves de 200ms, amarelo ganha intensidade
- **CTAs**: Sempre amarelo, sempre destacado, sempre acessível
- **Feedback Visual**: Mudanças sutis mas perceptíveis

### Animation
- **Hero 3D**: Animações contínuas e fluidas, scan lines e efeitos de bloom
- **Texto**: Fade-in em cascata para títulos (staggered animation)
- **Cards**: Elevação suave no hover (transform: translateY)
- **Transições**: Todas com duração 200-300ms, easing ease-in-out

### Typography System
- **Títulos (H1/H2)**: Space Grotesk ou Roboto Mono, peso 700-900, tamanho 2.5rem-4rem
- **Subtítulos**: Inter, peso 600, tamanho 1.25rem-1.5rem
- **Corpo**: Inter, peso 400-500, tamanho 1rem
- **Hierarquia**: Peso > Tamanho > Cor (nesta ordem de importância)

---

## Implementação

Esta filosofia será aplicada em:
1. **Hero Section**: Componente 3D WebGL com animações de scan line e bloom
2. **Seção Problema**: 3 cards sombrios com bordas sutis
3. **Seção Arsenal**: Grid 2x2 com ícones amarelos
4. **CTA Final**: Bloco amarelo cortando o fundo preto (máximo impacto)

Cada seção reforçará a sensação de controle, precisão e poder técnico.
