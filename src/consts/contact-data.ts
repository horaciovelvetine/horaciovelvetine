import { PROFILE_CONTENT } from './site-content';

/**
 * Contact information and availability details
 *
 * Contains all relevant contact methods and current availability status.
 * Used throughout the application to display contact information consistently
 * and provide users with multiple ways to get in touch. The preferred method
 * is indicated to guide user interaction priorities.
 *
 * @constant {Object} CONTACT_DATA - Contact information object
 * @property {string} email - Primary email address for contact
 * @property {string} github - GitHub profile URL
 * @property {string} linkedin - LinkedIn profile URL
 * @property {string} preferredMethod - Preferred contact method
 * @property {string} availability - Current availability status
 */
export const CONTACT_DATA = {
	email: PROFILE_CONTENT.contact.email,
	github: PROFILE_CONTENT.contact.github,
	linkedin: PROFILE_CONTENT.contact.linkedin,
	availability: PROFILE_CONTENT.availability,
	preferredMethod: PROFILE_CONTENT.contact.preferredMethod,
};
