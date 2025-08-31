/**
 * Detects if the current browser is Safari
 * 
 * @returns {boolean} True if the browser is Safari, false otherwise
 */
export function detectSafariBrowser(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();

  // Check for Safari (but not Chrome which also contains Safari in user agent)
  const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');
  // Check for WebKit engine (Safari uses WebKit)
  const isWebKit = userAgent.includes('webkit') && !userAgent.includes('chrome');

  return isSafari || isWebKit;
}