import type { IconProps } from '../../types';

/**
 * Play Icon Component
 *
 * A customizable play icon SVG component that renders a media control play icon.
 * Uses Heroicons play icon with configurable size, styling, and accessibility options.
 * Commonly used in media players, audio controls, video interfaces, and other playback-related features.
 *
 * @param {IconProps} props - The props for the PlayIcon component
 * @param {string} [props.size='size-128'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function PlayIcon({ size = 'size-128', classes = ' ', ariaHidden = false }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
      strokeWidth={3}
      stroke='currentColor'
      aria-hidden={ariaHidden}
      className={`${size} ${classes}`}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
      />
    </svg>
  );
}
