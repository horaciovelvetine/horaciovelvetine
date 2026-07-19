import { PROFILE_CONTENT } from './site-content';

/**
 * Data used for the About Component/Pages => About @horaciovelvetine
 */
export const ABOUT_DATA = {
	location: PROFILE_CONTENT.location,
	title: PROFILE_CONTENT.title,
	highlights: PROFILE_CONTENT.highlights,
	skillGroups: PROFILE_CONTENT.skillGroups,
	education: PROFILE_CONTENT.education.map(entry =>
		`${entry.school} - ${entry.degree} (${entry.dates})`
	),
	experience: PROFILE_CONTENT.experience.map(entry =>
		`${entry.role}, ${entry.company} (${entry.dates})`
	),
};
