import { BGSelectCombobox } from './components/bg-select-combobox';
import { SpriteSetSelector } from './components/sprite-set-selector';
import { ViewToggleSlider } from './components/view-toggle-slider';
import { SpriteCountSelector } from './components/sprite-count-selector';
import { RPSIcon } from '../rps-icon';
import type { RPSSketchWindowProps } from '../../windows/rps-sketch-window-props';
import { TailwindBGs500 } from '../../../../functions';

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
		<div className='rounded-[24px] border border-white/10 bg-zinc-950/90 p-4 shadow-2xl shadow-black/30'>
			<div className='flex flex-col items-center justify-center gap-2 text-center'>
				<RPSIcon
					size='size-16 xs:size-20 sm:size-28 md:size-36'
					renderWithAppleCompatability={
						siteSettings.deviceInfo.isAppleDevice ||
						siteSettings.deviceInfo.isSafariBrowser
					}
				/>
				<h2 className='text-3xl font-bold tracking-tighter lg:text-4xl'>
					Rock, Paper, Scissors
				</h2>
			</div>

			<p className='mx-auto max-w-2xl border-b border-white/10 px-1 py-3 text-center text-sm/5 font-medium tracking-tight text-stone-300/75 sm:text-base/6 md:text-lg/6'>
				Set the sprite style, count, and canvas look before you launch the
				simulation. Once it starts, click anywhere on the canvas to pause.
			</p>

			<div className='mt-4 flex flex-col gap-3'>
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
					description={`Show each sprite's heading and velocity`}
				/>
				<ViewToggleSlider
					accentColor={siteSettings.accentColor}
					toggleOn={windowState.showCollisionRadius}
					setToggleOn={windowState.setShowCollisionRadius}
					label='Show Collision Bounds:'
					description={`Show each sprite's collision bounding box`}
				/>
				<div className='flex justify-center pt-1.5'>
					<button
						type='button'
						className={`w-full rounded-2xl border border-white/10 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-black/20 transition-transform duration-150 hover:-translate-y-0.5 sm:w-auto ${TailwindBGs500[siteSettings.accentColor]}`}
						onClick={handleStartSketchClick}
						onTouchStart={handleStartSketchClick}>
						Start Game
					</button>
				</div>
			</div>
		</div>
	);
}
