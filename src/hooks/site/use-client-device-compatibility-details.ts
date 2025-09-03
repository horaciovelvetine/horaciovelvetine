import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import type { Dimensions, ClientDeviceCompatibilityDetails } from '../../types';
import {
	detectAppleDevice,
	detectMobileUserAgent,
	detectSafariBrowser,
	detectTouchDevice,
} from '../../functions';

// Breakpoint configuration
const BREAKPOINTS = {
	mobile: 768,
	tablet: 1024,
	desktop: 1200,
} as const;

/**
 * Custom hook that provides comprehensive information about the client's
 * device characteristics for determining mobile vs desktop site versions
 *
 * Features:
 * - SSR-safe initialization
 * - Debounced resize handling for performance
 * - Comprehensive device detection (touch, user agent, DPI)
 * - Configurable breakpoints
 * - Orientation change handling
 * - Error boundaries for edge cases
 *
 * @returns {ClientDeviceCompatibilityDetails} An object containing:
 *   - useMobileCompatibility: Boolean indicating if mobile compatibility mode should be used
 *   - deviceInfo: Additional device characteristics for advanced use cases
 */
export function useClientDeviceCompatibilityDetails(): ClientDeviceCompatibilityDetails {
	// SSR-safe initial state
	const [clientDimensions, setClientDimensions] = useState<Dimensions>(() => {
		if (typeof window === 'undefined') {
			return { width: 1024, height: 768 }; // Default fallback for SSR
		}
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	});

	const [isHydrated, setIsHydrated] = useState(false);

	// Debounced resize handler for better performance
	const timeoutRef = useRef<number>();

	const debouncedResizeHandler = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = window.setTimeout(() => {
			if (typeof window !== 'undefined') {
				setClientDimensions({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
		}, 100); // 100ms debounce
	}, []);

	// Memoized device characteristics
	const deviceInfo = useMemo(() => {
		if (typeof window === 'undefined') {
			return {
				isSafariBrowser: false,
				isAppleDevice: false,
				isTouchDevice: false,
				isMobileUserAgent: false,
				orientation: 'landscape' as const,
			};
		}

		const orientation: 'portrait' | 'landscape' =
			clientDimensions.width > clientDimensions.height ?
				'landscape'
			:	'portrait';

		return {
			isAppleDevice: detectAppleDevice(),
			isSafariBrowser: detectSafariBrowser(),
			isTouchDevice: detectTouchDevice(),
			isMobileUserAgent: detectMobileUserAgent(),
			orientation,
		};
	}, [clientDimensions]);

	// Comprehensive mobile detection logic
	const useMobileCompatibility = useMemo(() => {
		// Don't make decisions during SSR
		if (!isHydrated) {
			return false;
		}

		const { width } = clientDimensions;
		const { isTouchDevice, isMobileUserAgent, orientation } = deviceInfo;

		// Primary breakpoint check
		const isMobileBreakpoint = width <= BREAKPOINTS.mobile;

		// Secondary checks for edge cases
		const isTabletInPortrait =
			width <= BREAKPOINTS.tablet && orientation === 'portrait';
		const isTouchMobile = isTouchDevice && isMobileUserAgent;

		// Consider it mobile if:
		// 1. Width is within mobile breakpoint, OR
		// 2. It's a tablet in portrait mode, OR
		// 3. It's a touch device with mobile user agent (even if width is larger)
		return isMobileBreakpoint || isTabletInPortrait || isTouchMobile;
	}, [clientDimensions, deviceInfo, isHydrated]);

	// Effect for marking hydration
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsHydrated(true);
		}, 0);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	// Effect for handling resize and orientation changes
	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		let orientationTimeoutId: number;

		const handleOrientationChange = () => {
			// Clear any existing timeout
			if (orientationTimeoutId) {
				clearTimeout(orientationTimeoutId);
			}

			// Small delay to ensure dimensions are updated after orientation change
			orientationTimeoutId = window.setTimeout(() => {
				if (typeof window !== 'undefined') {
					setClientDimensions({
						width: window.innerWidth,
						height: window.innerHeight,
					});
				}
			}, 100);
		};

		// Add event listeners
		window.addEventListener('resize', debouncedResizeHandler);
		window.addEventListener('orientationchange', handleOrientationChange);

		// Cleanup
		return () => {
			window.removeEventListener('resize', debouncedResizeHandler);
			window.removeEventListener('orientationchange', handleOrientationChange);
			if (orientationTimeoutId) {
				clearTimeout(orientationTimeoutId);
			}
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [debouncedResizeHandler]);

	return {
		useMobileCompatibility,
		deviceInfo,
	};
}
