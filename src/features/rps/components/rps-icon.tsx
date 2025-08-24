import type { IconProps } from '../../../types';

/**
 * RPSIcon component renders an animated SVG icon for the Rock Paper Scissors game.
 *
 * This component creates a visually striking icon featuring the three RPS game elements
 * (rock ✊, paper ✋, scissors ✌️) arranged in a dynamic composition with a gradient
 * background and explosion effect. The icon is designed to represent the competitive
 * nature of the game with animated elements and vibrant colors.
 *
 * Features:
 * - Scalable SVG icon with customizable size
 * - Gradient background with purple-to-violet transition
 * - Radial explosion effect for visual impact
 * - Responsive emoji sizing based on icon dimensions
 * - Clean, modern design suitable for headers and menus
 * - Optimized positioning of game elements within the icon bounds
 *
 * The icon automatically calculates emoji sizing and positioning based on the provided
 * size prop, ensuring consistent visual proportions across different display contexts.
 * It's commonly used in headers, initialization menus, and about sections.
 *
 * @param props - Component props for the RPS icon
 * @param props.size - CSS class string defining the icon size (e.g., 'size-16', 'size-128')
 * @param props.classes - Additional CSS classes to apply to the SVG element
 */

export function RPSIcon({ size = 'size-128', classes = ' ' }: IconProps) {
	// Extract size number from size string (e.g. 'size-128' -> 128)
	const sizeNumber = parseInt(size.split('-')[1]);
	const emojiSize = sizeNumber * 3;
	const scissorsPosition = { x: 64 - emojiSize / 2, y: 128 - emojiSize - 15 };
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
				fill='url(#rpsBbackgroundGradient)'
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

			{/* Rock emoji (✊) - Top Left */}
			<foreignObject
				x='12'
				y='16'
				width={emojiSize}
				height={emojiSize}
				transform={`rotate(30 40 40)`}>
				<div
					style={{
						fontSize: `${(emojiSize * 0.65).toString()}px`,
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

			{/* Paper emoji (✋) - Top Right */}
			<foreignObject
				x={128 - emojiSize - 8}
				y='15'
				width={emojiSize}
				height={emojiSize}
				transform={`rotate(-30 90 45)`}>
				<div
					style={{
						fontSize: `${(emojiSize * 0.8).toString()}px`,
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

			{/* Scissors emoji (✌️) - Bottom Center */}
			<foreignObject
				x={scissorsPosition.x + 8}
				y={scissorsPosition.y - 18}
				width={emojiSize}
				height={emojiSize}
				transform={`rotate(30 ${scissorsPosition.x.toString()} ${scissorsPosition.y.toString()})`}>
				<div
					style={{
						fontSize: `${(emojiSize * 0.8).toString()}px`,
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
