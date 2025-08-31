import type { Dispatch, SetStateAction } from 'react';
import type { Dimensions } from './dimensions';

/**
 * Interface representing details about the client device's compatibility characteristics
 * @interface
 * @property {boolean} checkWindowsOnScreen - Flag indicating if window positions should be checked after a screen resize
 * @property {Dimensions} clientDimensions - Current dimensions of the client window
 * @property {boolean} useMobileCompatability - Whether mobile compatibility mode should be used based on device characteristics
 */

export interface ClientDeviceCompatabilityDetails {
	checkWindowsOnScreen: boolean;
	setCheckWindowsOnScreen: Dispatch<SetStateAction<boolean>>;
	clientDimensions: Dimensions;
	useMobileCompatability: boolean;
}
