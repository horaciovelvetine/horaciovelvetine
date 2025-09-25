import type { BlogPost } from '../types';
import { Tags } from './tags';

/**
 * Collection of all blog posts available on the site
 *
 * This constant contains the complete list of blog posts with their metadata,
 * including titles, descriptions, publication dates, tags, and GitHub URLs
 * for content retrieval. Each post entry provides all necessary information
 * for rendering, searching, filtering, and fetching the actual markdown content.
 *
 * @constant
 * @type {BlogPost[]}
 */

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: 'value-visitor-pattern',
		title: 'Value Visitor Pattern',
		description:
			'An exploration of the Value Visitor Pattern in software design',
		publishedDate: '2024-01-15',
		tags: [
			Tags.languages.java,
			Tags.topics.designPatterns,
			Tags.libraries.wikidataToolkit,
			Tags.topics.fundamentals,
		],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/blob/main/the-wikiverse/topics/the-visitor-pattern.md',
	},
	{
		slug: 'intro-to-wikidata',
		title: 'An Intro to Wikidata',
		description:
			'An introduction to the data model used, and how to access Wikidata',
		publishedDate: '2024-06-30',
		tags: [
			Tags.topics.exploration,
			Tags.topics.guide,
			Tags.projects.theWikiverse,
		],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/blob/main/the-wikiverse/topics/an-intro-to-wikidata.md',
	},
	{
		slug: 'wikiverse-devlog-1',
		title: 'Devlog 1 - to Start',
		description:
			'A quick introduction to the Wikiverse project, and the development plans for this year',
		publishedDate: '2025-09-08',
		tags: [
			Tags.topics.devlog,
			Tags.projects.theWikiverse,
		],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/blob/main/the-wikiverse/devlogs/devlog-1.md',
	},
];
