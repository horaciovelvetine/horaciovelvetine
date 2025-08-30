import type { IconProps } from '../../../types';

/**
 * Rock Paper Scissors Icon Component
 *
 * A customizable SVG icon component that displays the three classic RPS game elements
 * (rock ✊, paper ✋, scissors ✌️) arranged in a triangular formation with a gradient
 * background and visual effects. Designed to represent the Rock Paper Scissors game
 * with modern styling and scalable dimensions.
 *
 * Features:
 * - Scalable SVG with responsive emoji positioning
 * - Purple-to-violet gradient background
 * - Radial explosion effect for visual impact
 * - Dynamic emoji sizing based on icon dimensions
 * - Triangle formation layout of game elements
 * - Accessible with proper ARIA attributes
 *
 * The component automatically calculates emoji sizing and positioning to maintain
 * proper proportions across different icon sizes, ensuring visual consistency
 * throughout the application.
 *
 * @param {IconProps} props - The props for the RPSIcon component
 * @param {string} [props.size='size-128'] - Tailwind CSS size class for the icon dimensions
 * @param {string} [props.classes=' '] - Additional CSS classes to apply to the icon
 * @param {boolean} [props.ariaHidden=false] - Whether the icon should be hidden from screen readers
 */
export function RPSIcon({ size = 'size-128', classes = ' ' }: IconProps) {
	// Extract size number from size string (e.g. 'size-128' -> 128)
	const sizeNumber = parseInt(size.split('-')[1]);

	const emojiSize = Math.max(sizeNumber * 0.33, 20); // 33% of icon size, minimum 20px

	const centerX = 128 / 2;
	const centerY = 128 / 2 + 8; // Shifted down by 8 units (about 6% of icon height)

	// Radius for the triangle formation (distance from center to each emoji)
	const radius = 128 * 0.3; // 30% of icon size for good spacing

	// Rock (✊) at top, Paper (✋) at bottom-right, Scissors (✌️) at bottom-left
	const rockX = centerX; // Top center
	const rockY = centerY - radius;
	const paperX = centerX + radius * 0.866; // cos(30°) * radius for bottom-right
	const paperY = centerY + radius * 0.5; // sin(30°) * radius for bottom-right
	const scissorsX = centerX - radius * 0.866; // -cos(30°) * radius for bottom-left
	const scissorsY = centerY + radius * 0.5; // sin(30°) * radius for bottom-left

	return (
		<svg
			viewBox='0 0 128 128'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={`${size} ${classes}`}>
			{/* Rounded square background with gradient */}
			<defs>
				<linearGradient
					id='rpsBackgroundGradient'
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

				<radialGradient
					id='simpleExplosionGradient'
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

				{/* Inner shadow */}
				<filter id='innerShadow'>
					<feOffset
						dx='0'
						dy='2'
					/>
					<feGaussianBlur
						stdDeviation='2'
						result='offset-blur'
					/>
					<feComposite
						operator='out'
						in='SourceGraphic'
						in2='offset-blur'
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
				x='4'
				y='4'
				width='120'
				height='120'
				rx='24'
				ry='24'
				fill='url(#rpsBackgroundGradient)'
				filter='url(#innerShadow)'
			/>

			{/* Highlight on top */}
			<rect
				x='4'
				y='4'
				width='120'
				height='60'
				rx='24'
				ry='24'
				fill='url(#rpsBackgroundGradient)'
				opacity='0.3'
			/>

			{/* Simple explosion background - behind emojis */}
			<rect
				x='4'
				y='4'
				width='120'
				height='120'
				rx='24'
				ry='24'
				fill='url(#simpleExplosionGradient)'
			/>

			{/* Rock emoji (✊) - Top */}
			<foreignObject
				x={rockX - emojiSize}
				y={rockY - emojiSize}
				width={emojiSize * 2}
				height={emojiSize * 2}
				transform={`rotate(30 ${rockX.toString()} ${rockY.toString()})`}>
				<div
					style={{
						fontSize: `${(emojiSize * 2).toString()}px`,
						lineHeight: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
					}}>
					✊
				</div>
			</foreignObject>

			{/* Paper emoji (✋) - Bottom Right */}
			<foreignObject
				x={paperX - emojiSize}
				y={paperY - emojiSize}
				width={emojiSize * 2}
				height={emojiSize * 2}
				transform={`rotate(-30 ${paperX.toString()} ${paperY.toString()})`}>
				<div
					style={{
						fontSize: `${(emojiSize * 2).toString()}px`,
						lineHeight: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
					}}>
					✋
				</div>
			</foreignObject>

			{/* Scissors emoji (✌️) - Bottom Left */}
			<foreignObject
				x={scissorsX - emojiSize}
				y={scissorsY - emojiSize}
				width={emojiSize * 2}
				height={emojiSize * 2}
				transform={`rotate(30 ${scissorsX.toString()} ${scissorsY.toString()})`}>
				<div
					style={{
						fontSize: `${(emojiSize * 2).toString()}px`,
						lineHeight: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
					}}>
					✌️
				</div>
			</foreignObject>
		</svg>
	);
}
