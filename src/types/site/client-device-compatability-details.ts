import type { DeviceInfo } from './device-info';

/**
 * Interface representing comprehensive details about the client device's compatibility characteristics
 *
 * This interface provides both the primary mobile compatibility decision and additional
 * device information for advanced use cases. The mobile compatibility decision is based
 * on multiple factors including screen dimensions, touch capability, user agent, and orientation.
 *
 * @interface
 * @property {boolean} useMobileCompatibility - Whether mobile compatibility mode should be used based on comprehensive device analysis
 * @property {DeviceInfo} deviceInfo - Additional device characteristics for advanced customization
 */
export interface ClientDeviceCompatibilityDetails {
	useMobileCompatibility: boolean;
	deviceInfo: DeviceInfo;
}
