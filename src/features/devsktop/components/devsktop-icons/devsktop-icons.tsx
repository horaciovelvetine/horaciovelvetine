import type { LayoutProps } from '../../../../types';
import { SolvedokuIcon } from '../../../solvedoku';
import { HomeIcon } from './home-icon';
import { IconFrame } from './icon-frame';

export function DevsktopIcons(props: LayoutProps) {
  const ICONS = [
    {
      component: SolvedokuIcon,
      label: 'Solvedoku',
      onClick: () => {
        props.windowManager.openWindowByID('solvedoku-window');
      },
    },
    {
      component: HomeIcon,
      label: 'Home',
      onClick: () => {
        props.windowManager.openWindowByID('main-landing-window');
      },
    },
  ];

  const { width, height } = props.siteSettings.clientDimensions;
  //
  const trayXPosStart = width / 2 - 105 * (ICONS.length / 2);
  const trayYPosStart = height - 200;

  return (
    <div className='absolute min-h-full min-w-full'>
      {ICONS.map((icon, index) => (
        <IconFrame
          key={icon.label}
          Icon={icon.component}
          label={icon.label}
          onClickAction={icon.onClick}
          initialPosition={{ x: trayXPosStart + (index * 150), y: trayYPosStart }}
        />
      ))}
    </div>
  );
}
