import { BGSelectCombobox } from './components/bg-select-combobox';
import { SpriteSetSelector } from './components/sprite-set-selector';
import { ViewToggleSlider } from './components/view-toggle-slider';
import { SpriteCountSelector } from './components/sprite-count-selector';
import { RPSIcon } from '../rps-icon';
import type { RPSSketchWindowProps } from '../../windows/rps-sketch-window-props';

/**
 * InitializeSketchMenu component provides the main configuration interface for the Rock Paper Scissors sketch.
 *
 * This component serves as the primary setup screen where users can customize various aspects of the simulation
 * before starting it. It includes controls for sprite appearance, count, background color, and visual debugging
 * options. The component conditionally renders different elements based on mobile compatibility settings.
 *
 * Features:
 * - Sprite character set selection (hands vs objects)
 * - Sprite count configuration
 * - Background color selection
 * - Toggle switches for velocity indicators and collision radius visualization
 * - Responsive layout that adapts to mobile vs desktop views
 * - Start button to initialize the sketch with current settings
 *
 * @param props - Component props containing window state and site settings
 * @param props.windowState - State management object for the RPS sketch window
 * @param props.siteSettings - Global site configuration settings
 */

export function RPSInitializeSketchMenu({
	windowState,
	siteSettings,
}: RPSSketchWindowProps) {
	const handleStartSketchClick = () => {
		windowState.setSketchIsInitialized(Date.now());
	};

	return (
		<div className='mx-1 py-2 px-1 border-2 border-stone-300/30 rounded-lg bg-zinc-900/90'>
			<div className='flex flex-col items-center justify-center'>
				<RPSIcon size='size-16 xs:size-20 sm:size-28 md:size-36' />
				<h2 className='text-3xl lg:text-4xl font-bold tracking-tighter'>
					Rock, Paper, Scissors
				</h2>
			</div>

			<p className='text-sm/4 sm:text-base/6 md:text-lg/6 lg:text-xl/6 font-semibold text-stone-200/70 text-center tracking-tight italic border-b border-stone-300/25 py-1 px-1 mx-1 text-pretty'>
				Use the 'Start Game' button to begin the game and the menu to customize
				it.
			</p>
			<div className='flex flex-col gap-0.5 my-1 mx-2'>
				<SpriteSetSelector
					accentColor={siteSettings.accentColor}
					spriteCharSet={windowState.spriteChars}
					setSpriteCharSet={windowState.setSpriteChars}
				/>
				<SpriteCountSelector
					selected={windowState.spriteCount}
					setSelected={windowState.setSpriteCount}
					accentColor={siteSettings.accentColor}
				/>
				<BGSelectCombobox
					accentColor={siteSettings.accentColor}
					color={windowState.canvasColor}
					setColor={windowState.setCanvasColor}
				/>
				<ViewToggleSlider
					accentColor={siteSettings.accentColor}
					toggleOn={windowState.showVelocityIndicators}
					setToggleOn={windowState.setShowVelocityIndicators}
					label='Show Velocity:'
					description='Show each sprites heading and velocity'
				/>
				<ViewToggleSlider
					accentColor={siteSettings.accentColor}
					toggleOn={windowState.showCollisionRadius}
					setToggleOn={windowState.setShowCollisionRadius}
					label='Show Collision Bounds:'
					description={`Show an each sprite's collision bounding box`}
				/>
				<div className='flex justify-center pt-1.5'>
					<button
						type='button'
						className={`w-3/4 md:w-3/5 border border-stone-300/30 py-1 rounded-lg bg-${siteSettings.accentColor}-500`}
						onClick={handleStartSketchClick}
						onTouchStart={handleStartSketchClick}>
						Start Game
					</button>
				</div>
			</div>
		</div>
	);
}
