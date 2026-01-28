import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    padding: 16px;
    --wc-brass-light: #CD7F32;
    --wc-brass-dark: #B87333;
    --wc-brass-darker: #8B5A2B;
    --wc-gold: #CFB53B;
    --wc-gold-light: #D4AF37;
    --wc-parchment: #F5E6C8;
    --wc-parchment-dark: #E8D4A8;
    --wc-wood-dark: #3D2914;
    --wc-wood-medium: #5D4037;
    --wc-text-light: #F5E6C8;
    --wc-text-dark: #2C1810;
    --wc-section-bg-1: #8B4513;
    --wc-section-bg-2: #A0522D;
    --wc-section-bg-3: #CD853F;
    --wc-section-bg-4: #DEB887;
    --wc-border-width: 8px;
    --wc-transition-duration: 0.5s;
  }

  :host([dark-mode]) {
    --wc-brass-light: #A67C52;
    --wc-brass-dark: #8B6914;
    --wc-parchment: #2C2416;
    --wc-parchment-dark: #1E1810;
    --wc-text-light: #D4C4A8;
    --wc-section-bg-1: #4A2511;
    --wc-section-bg-2: #5C3317;
    --wc-section-bg-3: #6E4522;
    --wc-section-bg-4: #7F572D;
  }

  .card-container {
    background: var(--wc-parchment);
    border-radius: 50%;
    padding: 12px;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .clock-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  .clock-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Section slice styles */
  .section-slice {
    transition: opacity 0.3s ease;
  }

  .section-slice:hover {
    opacity: 0.9;
  }

  /* Section label styles - Medieval/Gothic golden text */
  .section-label {
    font-family: 'Cinzel', 'Uncial Antiqua', 'Times New Roman', Georgia, serif;
    font-weight: 700;
    fill: url(#textGradient);
    stroke: #2C1810;
    stroke-width: 0.5;
    paint-order: stroke fill;
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .section-label-shadow {
    font-family: 'Cinzel', 'Uncial Antiqua', 'Times New Roman', Georgia, serif;
    font-weight: 700;
    fill: rgba(0, 0, 0, 0.6);
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* Clock hand styles */
  .clock-hand {
    transition: transform var(--wc-transition-duration) ease-in-out;
    transform-origin: center center;
  }

  .clock-hand.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .hand-arrow {
    fill: var(--wc-gold);
    stroke: var(--wc-brass-darker);
    stroke-width: 1;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4));
  }

  .hand-shaft {
    fill: var(--wc-brass-dark);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  /* Person image at arrow tip */
  .person-image {
    clip-path: circle(50%);
  }

  .person-frame {
    fill: none;
    stroke: var(--wc-gold);
    stroke-width: 2;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  .person-fallback {
    fill: currentColor;
    font-family: 'Times New Roman', Georgia, serif;
    font-weight: bold;
    font-size: 12px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  /* Center hub styles */
  .center-hub {
    fill: url(#hubGradient);
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  }

  .center-hub-inner {
    fill: url(#hubInnerGradient);
    stroke: var(--wc-brass-dark);
    stroke-width: 1;
  }

  .center-rivet {
    fill: var(--wc-gold-light);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  /* Outer border */
  .clock-border {
    fill: none;
    stroke: url(#borderGradient);
    stroke-width: var(--wc-border-width);
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.5));
  }

  .clock-border-inner {
    fill: none;
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
  }

  /* Decorative rivets around border */
  .border-rivet {
    fill: var(--wc-gold);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  }

  /* Section dividers */
  .section-divider {
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  /* Texture overlay for aged look */
  .texture-overlay {
    mix-blend-mode: multiply;
    opacity: 0.1;
    pointer-events: none;
  }
`;
