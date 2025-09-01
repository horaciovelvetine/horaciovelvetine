import type { IconProps } from '../../../../types';

// Size mapping for consistent scaling (matches rps-icon)
const SIZE_MAP: Record<string, number> = {
  'size-4': 16,
  'size-5': 20,
  'size-6': 24,
  'size-7': 28,
  'size-8': 32,
  'size-9': 36,
  'size-10': 40,
  'size-11': 44,
  'size-12': 48,
  'size-16': 64,
  'size-18': 72,
  'size-20': 80,
  'size-22': 88,
  'size-28': 112,
  'size-36': 144,
};

/**
 * HomeIcon component that renders a stylized house icon for the desktop home/landing page
 * Features a modern isometric house design with gradient backgrounds and 3D-style roof
 *
 * The icon includes:
 * - Rounded background with gradient fill
 * - 3D pyramid-style roof with multiple faces for depth
 * - Simple house body with rounded corners
 * - Chimney for additional architectural detail
 *
 * @param {IconProps} props - Component properties
 * @param {string} [props.size='size-6'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=''] - Additional CSS classes to apply to the SVG element
 * @param {boolean} [props.ariaHidden=false] - Hide from screen readers
 * @returns JSX element containing the home icon SVG
 */
export function HomeIcon({ size = 'size-6', classes = '', ariaHidden = false }: IconProps) {
  const pixelSize = SIZE_MAP[size] || 24;
  return (
    <svg
      viewBox='0 0 128 128'
      width={pixelSize}
      height={pixelSize}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${size} ${classes} scale-95`}
      aria-hidden={ariaHidden}
      role='img'
      aria-label='Home'>
      {/* Background Shape */}
      <rect
        width='128'
        height='128'
        rx='32'
        ry='32'
        fill='url(#homeBackgroundGradient)'
      />

      {/* House body - simple silhouette with rounded bottom corners */}
      <path
        d='M25 62.5 L103 62.5 L103 105 Q103 115 93 115 L35 115 Q25 115 25 105 Z'
        fill='url(#houseGradient)'
      />

      {/* Pyramid Roof - Left Face (darker) */}
      <path
        d='M12.5 62.5 L20 62.5 L64 22.5 Z'
        fill='url(#houseGradient)'
        opacity='0.7'
      />

      {/* Pyramid Roof - Right Face (lighter) */}
      <path
        d='M108 62.5 L115.5 62.5 L64 22.5 Z'
        fill='url(#houseGradient)'
        opacity='0.9'
      />

      {/* Pyramid Roof - Front Face (main surface) */}
      <path
        d='M20 62.5 L64 22.5 L108 62.5 Z'
        fill='url(#houseGradient)'
      />

      {/* Chimney */}
      <rect
        x='85'
        y='32.5'
        width='12'
        height='25'
        rx='2.5'
        ry='2.5'
        fill='url(#houseGradient)'
        opacity='0.6'
      />

      {/* Chimney top */}
      <rect
        x='82.5'
        y='32.5'
        width='17'
        height='5'
        rx='2'
        ry='2'
        fill='url(#houseGradient)'
        opacity='0.8'
      />

      {/* Gradients */}
      <defs>
        <linearGradient
          id='homeBackgroundGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#FF8C00'
          />
          <stop
            offset='100%'
            stopColor='#FF6B00'
          />
        </linearGradient>

        <linearGradient
          id='houseGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#F1F5F9'
          />
          <stop
            offset='100%'
            stopColor='#E2E8F0'
          />
        </linearGradient>

        <linearGradient
          id='roofFrontGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#E53E3E'
          />
          <stop
            offset='100%'
            stopColor='#C53030'
          />
        </linearGradient>

        <linearGradient
          id='roofLeftGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#9B2C2C'
          />
          <stop
            offset='100%'
            stopColor='#742A2A'
          />
        </linearGradient>

        <linearGradient
          id='roofRightGradient'
          x1='100%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#FC8181'
          />
          <stop
            offset='100%'
            stopColor='#E53E3E'
          />
        </linearGradient>

        <linearGradient
          id='doorGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#8B4513'
          />
          <stop
            offset='100%'
            stopColor='#654321'
          />
        </linearGradient>

        <linearGradient
          id='chimneyGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#A0A0A0'
          />
          <stop
            offset='100%'
            stopColor='#808080'
          />
        </linearGradient>

        <linearGradient
          id='chimneyTopGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#B0B0B0'
          />
          <stop
            offset='100%'
            stopColor='#909090'
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
