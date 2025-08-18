import type { ReactNode } from 'react';
import type { IconProps, Position } from '../../../../types';

/**
 * Props for the IconFrame component that renders draggable desktop icons
 * Provides the icon component, label, click handler, and initial positioning for desktop application icons
 *
 * @interface IconFrameProps
 * @property {({ size }: IconProps) => ReactNode} Icon - React component that renders the icon with size props
 * @property {string} label - Text label displayed below the icon
 * @property {() => void} onClickAction - Callback function executed when the icon is double-clicked or double-tapped
 * @property {Position} initialPosition - Starting x,y coordinates for the draggable icon on the desktop
 */
export interface IconFrameProps {
	Icon: ({ size }: IconProps) => ReactNode;
	label: string;
	onClickAction: () => void;
	initialPosition: Position;
}
