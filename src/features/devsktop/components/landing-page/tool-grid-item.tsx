import type { ReactNode } from 'react';
import type { IconProps } from '../../../../types';

interface ToolGridItemProps {
	title: string;
	Icon: (props: IconProps) => ReactNode;
	hoverFill: string;
	href: string;
}

/**
 * ToolGridItem component that renders an individual tool/technology item in a grid layout
 *
 * This component displays a tool or technology with:
 * - Tool name/title as text
 * - Associated icon with random rotation effect
 * - Hover effects including shadow, opacity changes, and color transitions
 * - Responsive typography and spacing
 *
 * Used by various grid components (LanguagesGrid, FrameworksGrid, etc.) to create
 * consistent tool/technology showcase sections.
 *
 * @param title - The name/title of the tool or technology to display
 * @param Icon - React component function that renders the tool's icon
 * @param hoverFill - CSS class string defining the hover color for the icon
 */

export function ToolGridItem({
	title,
	Icon,
	hoverFill,
	href,
}: ToolGridItemProps) {
	const rotations = ['rotate-15', 'rotate-20', 'rotate-30'];
	const randomIndex = Math.floor(Math.random() * rotations.length);
	const iconRotation = rotations[randomIndex];

	return (
		<li className='inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300'>
			<a
				target='_blank'
				href={href}
				rel='noopener noreferrer'>
				<p className='relative z-10 text-xl xs:text-2xl font-stretch-condensed xs:font-stretch-semi-condensed sm:font-stretch-105% font-extrabold tracking-tighter p-1 md:py-2 md:px-1.5'>
					{title}
				</p>
				<Icon
					size='size-20 xs:size-24'
					classes={`absolute -top-4 xs:-top-6 -right-4 xs:right-1 ${iconRotation} pointer-events-none text-zinc-900 opacity-30 group-hover:opacity-100 transition-all duration-300 ${hoverFill}`}
					ariaHidden={true}
				/>
			</a>
		</li>
	);
}
