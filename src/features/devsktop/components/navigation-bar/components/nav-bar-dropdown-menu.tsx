import { Fragment } from 'react/jsx-runtime';
import type { NavBarMenuChild } from '../../../../../types';

/**
 * NavBarDropdownMenu component that renders a dropdown menu with multiple options
 *
 * This component creates a styled dropdown menu that appears below navigation bar items.
 * It supports various menu item features including keyboard shortcuts, disabled states,
 * hover explanations, section headers, and menu breaks between groups of items.
 *
 * Features:
 * - Backdrop blur and shadow styling for modern appearance
 * - Support for disabled menu items with visual feedback
 * - Keyboard shortcut display on the right side of menu items
 * - Hover tooltips for additional context
 * - Section headers and menu breaks for organization
 * - Click handlers for menu item actions
 *
 * @param {object} props - Component properties
 * @param {NavBarMenuChild[]} props.dropdownOptions - Array of menu options to display
 * @returns JSX element containing a styled dropdown menu with the provided options
 */
export function NavBarDropdownMenu({
	dropdownOptions,
}: {
	dropdownOptions: NavBarMenuChild[];
}) {
	return (
		<div className='absolute -left-1 bg-zinc-800/95 backdrop-blur-3xl border border-gray-300/50 px-0.5 rounded drop-shadow-2xl my-8 select-none'>
			<ul className='text-nowrap flex flex-col px-1 py-1 tracking-tight select-none'>
				{dropdownOptions.map(option => (
					<Fragment key={option.key}>
						<SectionHeader showHeaderText={option.displaySectionHeader} />
						<li
							className={`
								inline-flex px-1.5 py-0.25 leading-6 rounded-lg
								${
									option.isDisabled ?
										'text-white/50 cursor-not-allowed'
									:	'hover:bg-blue-500 hover:outline-gray-300/10 hover:outline-1'
								}`}
							onClick={option.onClickAction}>
							<button
								type='button'
								disabled={option.isDisabled}
								title={option.hoverExplainer}
								className={`
									inline-flex justify-between
									${option.displayKeyboardShortcut ? 'gap-6' : ''}
									${option.isDisabled ? 'cursor-not-allowed' : ''}
								`}>
								<p>{option.titleText}</p>
								{option.displayKeyboardShortcut && (
									<p className='text-white/40'>
										{option.displayKeyboardShortcut}
									</p>
								)}
							</button>
						</li>

						<MenuBreak show={option.displayMenuBreakAfter} />
					</Fragment>
				))}
			</ul>
		</div>
	);
}

function MenuBreak({ show }: { show: boolean | undefined }) {
	return <>{show && <li className='w-full border-b my-1'></li>}</>;
}

function SectionHeader({
	showHeaderText,
}: {
	showHeaderText: string | undefined;
}) {
	return (
		<>
			{showHeaderText && (
				<li
					className='text-white/40 text-sm '
					aria-label={`${showHeaderText} menu header`}>
					{showHeaderText}
				</li>
			)}
		</>
	);
}
