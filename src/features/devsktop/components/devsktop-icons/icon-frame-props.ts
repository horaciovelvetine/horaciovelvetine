import type { ReactNode } from 'react';
import type { IconProps, Position, SiteSettings } from '../../../../types';

/**
 * Props for the IconFrame component that renders draggable desktop icons
 * Provides the icon component, label, click handler, and positioning for desktop application icons
 * Icons handle their own repositioning when screen dimensions change
 *
 * @interface IconFrameProps
 * @property {({ size }: IconProps) => ReactNode} Icon - React component that renders the icon with size props
 * @property {string} label - Text label displayed below the icon
 * @property {() => void} onClickAction - Callback function executed when the icon is double-clicked or double-tapped
 * @property {Position} baseTrayPosition - Base position of the tray in the upper right corner
 * @property {number} iconIndex - Index of the icon within the tray for horizontal spacing
 * @property {SiteSettings} siteSettings - Site settings containing client dimensions for repositioning
 */
export interface IconFrameProps {
  Icon: ({ size }: IconProps) => ReactNode;
  label: string;
  onClickAction: () => void;
  baseTrayPosition: Position;
  iconIndex: number;
  siteSettings: SiteSettings;
}
