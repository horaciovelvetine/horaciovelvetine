import type { IconProps } from '../../../../types';

/**
 * HomeIcon component that renders a stylized house icon for the desktop home/landing page
 * Features a modern isometric house design with gradient backgrounds and 3D-style roof
 *
 * The icon includes:
 * - Rounded background with gradient fill
 * - 3D pyramid-style roof with multiple faces for depth
 * - Simple house body with rounded corners
 * - Door and window elements for detail
 *
 * @param {IconProps} props - Component properties
 * @param {string} [props.size='size-128'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the SVG element
 * @returns JSX element containing the home icon SVG
 */
export function HomeIcon({ size = 'size-128', classes = ' ' }: IconProps) {
  return (
    <svg
      viewBox='0 0 256 256'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${size} ${classes}`}>
      {/* Background Shape */}
      <rect
        width='256'
        height='256'
        rx='64'
        ry='64'
        fill='url(#homeBackgroundGradient)'
      />

      {/* House body - simple silhouette with rounded bottom corners */}
      <path
        d='M50 125 L206 125 L206 210 Q206 230 186 230 L70 230 Q50 230 50 210 Z'
        fill='url(#houseGradient)'
      />

      {/* Pyramid Roof - Left Face (darker) */}
      <path
        d='M25 125 L40 125 L128 45 Z'
        fill='url(#roofLeftGradient)'
      />

      {/* Pyramid Roof - Right Face (lighter) */}
      <path
        d='M216 125 L231 125 L128 45 Z'
        fill='url(#roofRightGradient)'
      />

      {/* Pyramid Roof - Front Face (main surface) */}
      <path
        d='M40 125 L128 45 L216 125 Z'
        fill='url(#roofFrontGradient)'
      />

      {/* Chimney */}
      <rect
        x='170'
        y='65'
        width='24'
        height='50'
        rx='5'
        ry='5'
        fill='url(#chimneyGradient)'
      />

      {/* Chimney top */}
      <rect
        x='165'
        y='65'
        width='34'
        height='10'
        rx='4'
        ry='4'
        fill='url(#chimneyTopGradient)'
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
            stopColor='#FFFFFF'
          />
          <stop
            offset='100%'
            stopColor='#F8F8F8'
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
