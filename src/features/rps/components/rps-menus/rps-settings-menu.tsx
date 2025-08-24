import type { RPSSketchWindowProps } from '../../windows/rps-sketch-window-props';
import { BGSelectCombobox } from './components/bg-select-combobox';
import { SpriteCountSelector } from './components/sprite-count-selector';
import { SpriteSetSelector } from './components/sprite-set-selector';
import { ViewToggleSlider } from './components/view-toggle-slider';

/**
 * SettingsMenu component provides runtime configuration controls for the Rock Paper Scissors simulation.
 *
 * This component renders an interactive menu that allows users to modify various aspects of the
 * simulation while it's running. Unlike the InitializeSketchMenu which is shown before the game starts,
 * this menu is accessible during gameplay and provides real-time configuration changes.
 *
 * Features:
 * - Live sprite character set switching (hands vs objects)
 * - Dynamic sprite count adjustment
 * - Real-time background color changes
 * - Toggle switches for velocity indicators and collision radius visualization
 * - All changes apply immediately to the running simulation
 *
 * @param props - Component props containing window state and site settings
 * @param props.windowState - State management object for the RPS sketch window
 * @param props.siteSettings - Global site configuration settings
 */
export function RPSSettingsMenu({
	siteSettings,
	windowState,
}: RPSSketchWindowProps) {
	return (
		<div className='flex flex-col gap-1 mb-2 px-3 py-2 border-2 border-stone-300/30 rounded-lg bg-stone-300/5'>
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
		</div>
	);
}
