import type { IconProps } from '../../../types';
import { detectAppleDevice } from '../../../functions/site/detect-apple-device';
import { detectSafariBrowser } from '../../../functions/site/detect-safari-browser';

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

	// Emoji sizing
	EMOJI_SIZE_RATIO: 0.38, // Emojis take up 28% of icon size
	EMOJI_SIZE_RATIO_APPLE: 0.37, // Slightly smaller for Apple devices

	// Triangle formation radius
	TRIANGLE_RADIUS_RATIO: 0.28,
	TRIANGLE_RADIUS_RATIO_APPLE: 0.25,

	// Positioning adjustments
	CENTER_Y_OFFSET: 0.02, // Small offset for visual balance

	// Background styling
	BORDER_RADIUS_RATIO: 0.2,
	PADDING_RATIO: 0.03,

	// Effects
	BLUR_RATIO: 0.015,
	SHADOW_OFFSET_RATIO: 0.015,
};

/**
 * Rock Paper Scissors Icon Component
 *
 * A scalable SVG icon displaying rock (✊), paper (✋), and scissors (✌️)
 * in a triangular formation with gradient background and visual effects.
 *
 * Features:
 * - Consistent scaling across all size variants (16-144px)
 * - Fixed viewBox with proportional element sizing
 * - Platform-optimized rendering for Apple/Safari
 * - Gradient background with radial explosion effect
 * - Accessible with proper ARIA attributes
 *
 * @param {IconProps} props - Component props
 * @param {string} [props.size='size-6'] - Tailwind size class
 * @param {string} [props.classes=''] - Additional CSS classes
 * @param {boolean} [props.ariaHidden=false] - Hide from screen readers
 */
export function RPSIcon({
	size = 'size-6',
	classes = '',
	ariaHidden = false,
}: IconProps) {
	const pixelSize = SIZE_MAP[size] || 24;
	const isAppleOrSafari = detectAppleDevice() || detectSafariBrowser();

	const viewBoxSize = SCALING_CONSTANTS.BASE_SIZE;
	const center = viewBoxSize / 2;

	const emojiSizeRatio =
		isAppleOrSafari ?
			SCALING_CONSTANTS.EMOJI_SIZE_RATIO_APPLE
		:	SCALING_CONSTANTS.EMOJI_SIZE_RATIO;

	const triangleRadiusRatio =
		isAppleOrSafari ?
			SCALING_CONSTANTS.TRIANGLE_RADIUS_RATIO_APPLE
		:	SCALING_CONSTANTS.TRIANGLE_RADIUS_RATIO;

	const emojiSize = viewBoxSize * emojiSizeRatio;
	const triangleRadius = viewBoxSize * triangleRadiusRatio;
	const adjustedCenterY =
		center + viewBoxSize * SCALING_CONSTANTS.CENTER_Y_OFFSET;

	const positions = {
		rock: { x: center, y: adjustedCenterY - triangleRadius, rotation: 0 },
		paper: {
			x: center + triangleRadius * Math.cos(Math.PI / 6),
			y: adjustedCenterY + triangleRadius * Math.sin(Math.PI / 6),
			rotation: -30,
		},
		scissors: {
			x: center - triangleRadius * Math.cos(Math.PI / 6),
			y: adjustedCenterY + triangleRadius * Math.sin(Math.PI / 6),
			rotation: 30,
		},
	};

	const borderRadius = viewBoxSize * SCALING_CONSTANTS.BORDER_RADIUS_RATIO;
	const padding = viewBoxSize * SCALING_CONSTANTS.PADDING_RATIO;
	const blurAmount = viewBoxSize * SCALING_CONSTANTS.BLUR_RATIO;
	const shadowOffset = viewBoxSize * SCALING_CONSTANTS.SHADOW_OFFSET_RATIO;

	const emojis = [
		{ symbol: '✊', ...positions.rock },
		{ symbol: '✋', ...positions.paper },
		{ symbol: '✌️', ...positions.scissors },
	];

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
			aria-label='Rock Paper Scissors'>
			{/* Gradients */}
			<defs>
				{/* Background gradient */}
				<linearGradient
					id='rpsGradient'
					x1='0%'
					y1='0%'
					x2='100%'
					y2='100%'>
					<stop
						offset='0%'
						stopColor='#4F46E5'
					/>
					<stop
						offset='100%'
						stopColor='#7C3AED'
					/>
				</linearGradient>

				{/* Radial explosion effect */}
				<radialGradient
					id='rpsExplosion'
					cx='50%'
					cy='50%'
					r='70%'>
					<stop
						offset='0%'
						stopColor='#FFFFFF'
						stopOpacity='0.9'
					/>
					<stop
						offset='20%'
						stopColor='#FDBA74'
						stopOpacity='0.7'
					/>
					<stop
						offset='60%'
						stopColor='#F97316'
						stopOpacity='0.5'
					/>
					<stop
						offset='100%'
						stopColor='#DC2626'
						stopOpacity='0.3'
					/>
				</radialGradient>

				{/* Inner shadow filter */}
				<filter id='rpsInnerShadow'>
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
						floodOpacity='0.2'
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
			</defs>

			{/* Main background */}
			<rect
				x={padding}
				y={padding}
				width={viewBoxSize - padding * 2}
				height={viewBoxSize - padding * 2}
				rx={borderRadius}
				fill='url(#rpsGradient)'
				filter='url(#rpsInnerShadow)'
			/>

			{/* Top highlight */}
			<rect
				x={padding}
				y={padding}
				width={viewBoxSize - padding * 2}
				height={(viewBoxSize - padding * 2) / 2}
				rx={borderRadius}
				fill='url(#rpsGradient)'
				opacity='0.3'
			/>

			{/* Explosion effect overlay */}
			<rect
				x={padding}
				y={padding}
				width={viewBoxSize - padding * 2}
				height={viewBoxSize - padding * 2}
				rx={borderRadius}
				fill='url(#rpsExplosion)'
			/>

			{/* Render emojis */}
			{emojis.map((emoji, index) => (
				<foreignObject
					key={`emoji-${index.toString()}`}
					x={emoji.x - emojiSize / 2}
					y={emoji.y - emojiSize / 2}
					width={emojiSize}
					height={emojiSize}
					transform={
						emoji.rotation ?
							`rotate(${emoji.rotation.toString()} ${emoji.x.toString()} ${emoji.y.toString()})`
						:	undefined
					}>
					<div
						style={{
							width: '100%',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: `${(emojiSize * 0.8).toString()}px`,
							lineHeight: 1,
						}}>
						{emoji.symbol}
					</div>
				</foreignObject>
			))}
		</svg>
	);
}
