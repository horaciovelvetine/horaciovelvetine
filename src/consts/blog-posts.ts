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
			'An exploration of the Visitor Pattern in software design including why and where it came from.',
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
			'An introduction to the data model used, and an overview of how you might access Wikidata in variety of ways.',
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
		title: 'Wikiverse Devlog 1',
		description:
			'A quick introduction to the Wikiverse project, and the development plans for this year.',
		publishedDate: '2025-09-08',
		tags: [Tags.topics.devlog, Tags.projects.theWikiverse],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/blob/main/the-wikiverse/devlogs/devlog-1.md',
	},
	{
		slug: 'wikiverse-devlog-2',
		title: 'Wikiverse Devlog 2',
		description:
			'An overview of the planned features slated for the Beta and a quick digression for some open-source contribution.',
		publishedDate: '2025-09-14',
		tags: [
			Tags.topics.devlog,
			Tags.projects.theWikiverse,
			Tags.topics.visualizations,
		],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/blob/main/the-wikiverse/devlogs/devlog-2.md',
	},
	{
		slug: 'wikiverse-devlog-3',
		title: 'Wikiverse Devlog 3',
		description:
			'Establishing the data model and a first look into the filtering and data ingest process, the crucial first step to building relevant Graphs.',
		publishedDate: '2025-09-20',
		tags: [
			Tags.topics.devlog,
			Tags.projects.theWikiverse,
			Tags.topics.visualizations,
		],
		githubUrl:
			'https://github.com/horaciovelvetine/writing-and-resources/blob/main/the-wikiverse/devlogs/devlog-3.md',
	},
];
