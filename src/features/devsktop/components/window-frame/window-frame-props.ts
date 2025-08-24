/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';
import type {
	ManagedWindow,
	SiteSettings,
	WindowManager,
} from '../../../../types';

/**
 * Props for the WindowFrame component that wraps application windows in a draggable frame
 * Provides window management functionality including dragging, focusing, and rendering
 *
 * @interface WindowFrameProps
 * @property {ManagedWindow} window - The managed window instance containing state and metadata
 * @property {WindowManager} windowManager - Window manager for handling window operations like focus and positioning
 * @property {SiteSettings} siteSettings - Global site settings including theme, dimensions, and configuration
 * @property {(args: any) => ReactNode} Component - The React component to render inside the window frame
 */
export interface WindowFrameProps {
	window: ManagedWindow;
	windowManager: WindowManager;
	siteSettings: SiteSettings;
	Component: (args: any) => ReactNode;
}
