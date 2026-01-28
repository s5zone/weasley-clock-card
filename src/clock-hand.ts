import { svg, SVGTemplateResult, nothing } from 'lit';
import { PersonPosition } from './types';
import { polarToCartesian, stringToColor } from './utils';

const CENTER = 200;
const HAND_LENGTH = 130;
const ARROW_SIZE = 15;
const PERSON_RADIUS = 18;

export function renderClockHand(
  person: PersonPosition,
  index: number
): SVGTemplateResult | typeof nothing {
  if (!person.isAvailable) {
    return nothing;
  }

  const angle = person.angle;
  const color = person.config.color || stringToColor(person.config.entity);
  const hasImage = person.state?.attributes?.entity_picture;
  const displayName = person.config.name ||
    person.state?.attributes?.friendly_name ||
    person.config.entity.replace('person.', '');

  // Calculate positions
  const arrowTip = polarToCartesian(CENTER, CENTER, HAND_LENGTH, angle);
  const arrowBase = polarToCartesian(CENTER, CENTER, HAND_LENGTH - ARROW_SIZE * 2, angle);

  // Arrow wing points (perpendicular to the hand direction)
  const wingAngle1 = angle - 90;
  const wingAngle2 = angle + 90;
  const wingOffset = ARROW_SIZE * 0.6;

  const wing1 = polarToCartesian(arrowBase.x, arrowBase.y, wingOffset, wingAngle1);
  const wing2 = polarToCartesian(arrowBase.x, arrowBase.y, wingOffset, wingAngle2);

  // Shaft end (near center hub)
  const shaftStart = polarToCartesian(CENTER, CENTER, 30, angle);

  // Person image position (at the arrow tip)
  const personPos = polarToCartesian(CENTER, CENTER, HAND_LENGTH + PERSON_RADIUS + 5, angle);

  // Unique IDs for this hand's clip path
  const clipId = `person-clip-${index}`;

  return svg`
    <g class="clock-hand" style="transform: rotate(0deg)">
      <!-- Hand shaft -->
      <path
        class="hand-shaft"
        d="M ${shaftStart.x} ${shaftStart.y}
           L ${wing1.x - (wing1.x - shaftStart.x) * 0.3} ${wing1.y - (wing1.y - shaftStart.y) * 0.3}
           L ${wing1.x} ${wing1.y}
           L ${arrowBase.x} ${arrowBase.y}
           L ${wing2.x} ${wing2.y}
           L ${wing2.x - (wing2.x - shaftStart.x) * 0.3} ${wing2.y - (wing2.y - shaftStart.y) * 0.3}
           Z"
      />

      <!-- Arrow head -->
      <polygon
        class="hand-arrow"
        points="${arrowTip.x},${arrowTip.y} ${wing1.x},${wing1.y} ${wing2.x},${wing2.y}"
      />

      <!-- Person circle with image or fallback -->
      <defs>
        <clipPath id="${clipId}">
          <circle cx="${personPos.x}" cy="${personPos.y}" r="${PERSON_RADIUS}" />
        </clipPath>
      </defs>

      ${hasImage ? svg`
        <!-- Person image -->
        <image
          class="person-image"
          x="${personPos.x - PERSON_RADIUS}"
          y="${personPos.y - PERSON_RADIUS}"
          width="${PERSON_RADIUS * 2}"
          height="${PERSON_RADIUS * 2}"
          href="${person.state?.attributes?.entity_picture}"
          clip-path="url(#${clipId})"
          preserveAspectRatio="xMidYMid slice"
        />
      ` : svg`
        <!-- Fallback colored circle with initial -->
        <circle
          cx="${personPos.x}"
          cy="${personPos.y}"
          r="${PERSON_RADIUS}"
          fill="${color}"
        />
        <text
          class="person-fallback"
          x="${personPos.x}"
          y="${personPos.y}"
          fill="white"
        >
          ${getInitials(displayName)}
        </text>
      `}

      <!-- Decorative frame around person -->
      <circle
        class="person-frame"
        cx="${personPos.x}"
        cy="${personPos.y}"
        r="${PERSON_RADIUS + 2}"
      />

      <!-- Small decorative rivets on frame -->
      ${[0, 90, 180, 270].map(a => {
        const rivetPos = polarToCartesian(personPos.x, personPos.y, PERSON_RADIUS + 2, a);
        return svg`
          <circle
            cx="${rivetPos.x}"
            cy="${rivetPos.y}"
            r="2"
            fill="#CFB53B"
            stroke="#8B6914"
            stroke-width="0.5"
          />
        `;
      })}
    </g>
  `;
}

// Get initials from a name (up to 2 characters)
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
