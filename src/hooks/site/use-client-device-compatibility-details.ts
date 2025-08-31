import { useEffect, useMemo, useState } from 'react';
import type { Dimensions, ClientDeviceCompatabilityDetails } from '../../types';
import { detectAppleDevice, detectSafariBrowser } from '../../functions';

/**
 * A custom hook that provides information about the client's window and device characteristics
 *
 * @returns {ClientDeviceCompatibilityDetails} An object containing:
 *   - clientDimensions: Current window dimensions (width and height)
 *   - isMobileDeviceID: Boolean indicating if device is mobile based on user agent
 *   - isMobileDimensions: Boolean indicating if window dimensions are mobile-sized (width <= 768px)
 *   - isTouchEnabledDevice: Boolean indicating if device has touch capabilities
 */
export function useClientDeviceCompatibilityDetails(): ClientDeviceCompatabilityDetails {
	const [clientDimensions, setClientDimensions] = useState<Dimensions>({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [checkWindowsOnScreen, setCheckWindowsOnScreen] = useState(false);

	const [isMobileDimensions, setIsMobileDimensions] = useState<boolean>(
		clientDimensions.width < 768
	);

	useEffect(() => {
		const handleResize = () => {
			setClientDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
			setIsMobileDimensions(window.innerWidth < 768);
			setCheckWindowsOnScreen(true);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		checkWindowsOnScreen,
		setCheckWindowsOnScreen,
		clientDimensions,
		useMobileCompatability: isMobileDimensions,
	};
}
