import { useEffect, useState } from 'react';
import type { Dimensions, ClientDeviceCompatabilityDetails } from '../../types';

/**
 * A custom hook that provides information about the client's window and device characteristics
 *
 * @returns {ClientDeviceCompatibilityDetails} An object containing:
 *   - isMobileDimensions: Boolean indicating if window dimensions are mobile-sized (width <= 768px)
 */
export function useClientDeviceCompatibilityDetails(): ClientDeviceCompatabilityDetails {
	const [clientDimensions, setClientDimensions] = useState<Dimensions>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

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
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		useMobileCompatability: isMobileDimensions,
	};
}
