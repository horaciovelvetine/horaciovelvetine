import type { IconProps } from '../../../types';

// Size mapping for consistent scaling
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

const SCALING_CONSTANTS = {
  // Base viewBox size - all calculations are relative to this
  BASE_SIZE: 100,

  // Paper dimensions
  PAPER_WIDTH_RATIO: 0.7,
  PAPER_HEIGHT_RATIO: 0.85,
  PAPER_CORNER_RADIUS_RATIO: 0.08,

  // Spiral binding - removed

  // Text lines
  LINE_COUNT: 8,
  LINE_SPACING_RATIO: 0.08,
  LINE_LENGTH_RATIO: 0.5,
  LINE_START_X_RATIO: 0.15,

  // Pen/pencil - removed

  // Apple Notes style
  NOTEPAD_COLOR: '#FFFFFF', // Clean white notepad
  NOTEPAD_SHADOW_COLOR: '#F3F4F6', // Subtle shadow
  MARGIN_WIDTH_RATIO: 0.06,
  MARGIN_COLOR: '#E5E7EB', // Light gray margin

  // Background styling
  BORDER_RADIUS_RATIO: 0.2,
  PADDING_RATIO: 0.03,

  // Effects
  BLUR_RATIO: 0.015,
  SHADOW_OFFSET_RATIO: 0.015,
};

/**
 * Apple Notes Style Icon Component
 *
 * A scalable SVG icon displaying a clean notepad with spiral binding, light margin line,
 * and writing lines in Apple's Notes app design language.
 *
 * Features:
 * - Consistent scaling across all size variants (16-144px)
 * - Fixed viewBox with proportional element sizing
 * - Platform-optimized rendering for Apple/Safari
 * - Apple Notes yellow gradient background
 * - Clean white notepad with subtle gray margin
 * - Accessible with proper ARIA attributes
 *
 * @param {IconProps} props - Component props
 * @param {string} [props.size='size-6'] - Tailwind size class
 * @param {string} [props.classes=''] - Additional CSS classes
 * @param {boolean} [props.ariaHidden=false] - Hide from screen readers
 */
export function NotesIcon({
  size = 'size-6',
  classes = '',
  ariaHidden = false,
}: IconProps) {
  const pixelSize = SIZE_MAP[size] || 24;

  const viewBoxSize = SCALING_CONSTANTS.BASE_SIZE;
  const center = viewBoxSize / 2;

  // Paper dimensions
  const paperWidth = viewBoxSize * SCALING_CONSTANTS.PAPER_WIDTH_RATIO;
  const paperHeight = viewBoxSize * SCALING_CONSTANTS.PAPER_HEIGHT_RATIO;
  const paperX = center - paperWidth / 2;
  const paperY = center - paperHeight / 2;
  const paperCornerRadius = viewBoxSize * SCALING_CONSTANTS.PAPER_CORNER_RADIUS_RATIO;

  // Text lines
  const lineSpacing = viewBoxSize * SCALING_CONSTANTS.LINE_SPACING_RATIO;
  const lineLength = viewBoxSize * SCALING_CONSTANTS.LINE_LENGTH_RATIO;
  const marginWidth = viewBoxSize * SCALING_CONSTANTS.MARGIN_WIDTH_RATIO;
  const lineStartX = paperX + marginWidth + viewBoxSize * 0.05;
  const lineStartY = paperY + viewBoxSize * 0.2;

  const borderRadius = viewBoxSize * SCALING_CONSTANTS.BORDER_RADIUS_RATIO;
  const padding = viewBoxSize * SCALING_CONSTANTS.PADDING_RATIO;
  const blurAmount = viewBoxSize * SCALING_CONSTANTS.BLUR_RATIO;
  const shadowOffset = viewBoxSize * SCALING_CONSTANTS.SHADOW_OFFSET_RATIO;

  return (
    <svg
      viewBox={`0 0 ${viewBoxSize.toString()} ${viewBoxSize.toString()}`}
      width={pixelSize}
      height={pixelSize}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${size} ${classes}`}
      aria-hidden={ariaHidden}
      role='img'
      aria-label='Notes App'>
      {/* Gradients */}
      <defs>
        {/* Background gradient - Apple Notes yellow */}
        <linearGradient
          id='notesGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#FEF3C7'
          />
          <stop
            offset='50%'
            stopColor='#FDE68A'
          />
          <stop
            offset='100%'
            stopColor='#FCD34D'
          />
        </linearGradient>

        {/* Clean white notepad */}
        <linearGradient
          id='paperGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#FFFFFF'
            stopOpacity='1'
          />
          <stop
            offset='100%'
            stopColor='#F9FAFB'
            stopOpacity='0.98'
          />
        </linearGradient>


        {/* Inner shadow filter */}
        <filter id='notesInnerShadow'>
          <feOffset
            dx='0'
            dy={shadowOffset}
          />
          <feGaussianBlur
            stdDeviation={blurAmount}
            result='offsetBlur'
          />
          <feComposite
            operator='out'
            in='SourceGraphic'
            in2='offsetBlur'
            result='inverse'
          />
          <feFlood
            floodColor='black'
            floodOpacity='0.15'
          />
          <feComposite
            operator='in'
            in2='inverse'
          />
          <feComposite
            operator='over'
            in2='SourceGraphic'
          />
        </filter>

        {/* Paper Shadow */}
        <filter id='paperShadow'>
          <feDropShadow
            dx='2'
            dy='4'
            stdDeviation='3'
            floodOpacity='0.3'
          />
        </filter>
      </defs>

      {/* Main background */}
      <rect
        x={padding}
        y={padding}
        width={viewBoxSize - padding * 2}
        height={viewBoxSize - padding * 2}
        rx={borderRadius}
        fill='url(#notesGradient)'
        filter='url(#notesInnerShadow)'
      />

      {/* Top highlight */}
      <rect
        x={padding}
        y={padding}
        width={viewBoxSize - padding * 2}
        height={(viewBoxSize - padding * 2) / 2}
        rx={borderRadius}
        fill='url(#notesGradient)'
        opacity='0.3'
      />

      {/* Paper notepad */}
      <rect
        x={paperX}
        y={paperY}
        width={paperWidth}
        height={paperHeight}
        rx={paperCornerRadius}
        fill='url(#paperGradient)'
        filter='url(#paperShadow)'
      />

      {/* Light gray margin line */}
      <line
        x1={paperX + marginWidth}
        y1={paperY + viewBoxSize * 0.1}
        x2={paperX + marginWidth}
        y2={paperY + paperHeight - viewBoxSize * 0.1}
        stroke={SCALING_CONSTANTS.MARGIN_COLOR}
        strokeWidth='1'
        strokeLinecap='round'
      />


      {/* Text lines - clear and visible, extending down the paper */}
      {Array.from({ length: SCALING_CONSTANTS.LINE_COUNT }, (_, i) => (
        <line
          key={`line-${i.toString()}`}
          x1={lineStartX}
          y1={lineStartY + i * lineSpacing}
          x2={lineStartX + lineLength}
          y2={lineStartY + i * lineSpacing}
          stroke='rgba(0, 0, 0, 0.25)'
          strokeWidth='0.8'
          strokeLinecap='round'
        />
      ))}


      {/* Subtle paper texture overlay */}
      <rect
        x={paperX}
        y={paperY}
        width={paperWidth}
        height={paperHeight}
        rx={paperCornerRadius}
        fill='none'
        stroke='rgba(0, 0, 0, 0.05)'
        strokeWidth='0.5'
      />
    </svg>
  );
}
