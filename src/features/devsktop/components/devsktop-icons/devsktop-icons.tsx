import type { LayoutProps } from '../../../../types';
import { SolvedokuIcon } from '../../../solvedoku';
import { HomeIcon } from './home-icon';
import { IconFrame } from './icon-frame';

export function DevsktopIcons(props: LayoutProps) {
	const ICONS = [
		{
			component: HomeIcon,
			label: 'Home',
			onClick: () => {
				props.windowManager.openWindowByID('main-landing-window');
			},
		},
		{
			component: SolvedokuIcon,
			label: 'Solvedoku',
			onClick: () => {
				props.windowManager.openWindowByID('solvedoku-window');
			},
		},
	];

	const { width, height } = props.siteSettings.clientDimensions;
	//
	const trayXPosStart = width / 2 - 98 * (ICONS.length / 2);
	const trayYPosStart = height - (height >= 500 ? 200 : 130);

	return (
		<div className='absolute min-h-full min-w-full'>
			{ICONS.map((icon, index) => (
				<IconFrame
					key={icon.label}
					Icon={icon.component}
					label={icon.label}
					onClickAction={icon.onClick}
					initialPosition={{ x: trayXPosStart + index * 130, y: trayYPosStart }}
				/>
			))}
		</div>
	);
}
