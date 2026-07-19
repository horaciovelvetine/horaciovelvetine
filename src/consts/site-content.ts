import { GITHUB, LINKEDIN } from './urls';

export const PROFILE_CONTENT = {
	name: 'James Tillman',
	handle: '@horaciovelvetine',
	location: 'Denver, Colorado',
	title: 'Full-Stack Engineer and Creative Technologist',
	shortTagline:
		'I build distinctive software, interactive systems, and portfolio pieces that prove both technical depth and creative range.',
	intro:
		'Enterprising full-stack engineer with hands-on experience across frontend and backend systems, a strong eye for craft, and an unusual background in music production and technical problem solving.',
	availability:
		'Open to software engineering, creative technology, and collaborative product work.',
	contact: {
		email: 'james.p.tillman@gmail.com',
		github: GITHUB,
		linkedin: LINKEDIN,
		preferredMethod: 'Email',
	},
	highlights: [
		'B.S. Computer Science expected December 2026 at the University of Colorado Boulder.',
		'Microsoft Certified: Azure Fundamentals (AZ-900).',
		'Built production-minded work across React, TypeScript, Java, Spring Boot, Ruby on Rails, Python, SQL, and cloud tooling.',
	],
	education: [
		{
			school: 'University of Colorado Boulder',
			degree: 'B.S. Computer Science',
			dates: 'Expected Dec. 2026',
		},
		{
			school: 'Tech Elevator',
			degree: 'Java and JavaScript Full-Stack Coding Bootcamp',
			dates: '2023',
		},
		{
			school: 'University of Cincinnati',
			degree:
				'B.A. Commercial Music Production and A.B. Business: Entrepreneurship',
			dates: 'Dec. 2018',
		},
	],
	experience: [
		{
			role: 'Consumer Electronics Agent',
			company: 'Geek Squad',
			dates: 'Sept. 2022 - Present',
			bullets: [
				'Designs, configures, and troubleshoots home and business networks across a wide range of devices and infrastructure.',
				'Supports custom domain, email, and cloud application setups across providers including Google Workspace, Microsoft 365, Exchange, Zoho, and Apple Mail.',
				'Delivers technical guidance to clients with different levels of experience, translating complex systems into clear next steps.',
			],
		},
		{
			role: 'Research Collaborator',
			company: 'Data Mine of the Rockies / U.S. Space Command J4',
			dates: 'Sept. 2025 - Present',
			bullets: [
				'Builds Python-based predictive modeling workflows to analyze degradation and readiness signals across critical infrastructure datasets.',
				'Works with teammates from multiple technical backgrounds in an iterative, feedback-driven delivery process.',
			],
		},
		{
			role: 'Assistant',
			company: 'Busbee Inc.',
			dates: 'Aug. 2019 - Apr. 2021',
			bullets: [
				'Produced, edited, and recorded songs for world-class artists while managing mission-critical studio technology and operations.',
				'Developed a high bar for detail, calm execution, and systems thinking under creative pressure.',
			],
		},
	],
	skillGroups: [
		{
			label: 'Languages',
			items: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Ruby', 'SQL', 'HTML', 'CSS'],
		},
		{
			label: 'Frameworks',
			items: ['React', 'TanStack Router', 'Spring Boot', 'Ruby on Rails', 'Node.js', 'Vite'],
		},
		{
			label: 'Data and Cloud',
			items: ['PostgreSQL', 'SQLite', 'Azure', 'AWS', 'Wikidata Toolkit', 'Postman'],
		},
		{
			label: 'Testing and Tooling',
			items: ['Jest', 'Cypress', 'Capybara', 'JUnit', 'GTest', 'Git', 'CMake', 'Maven'],
		},
		{
			label: 'Visual and UX',
			items: ['P5.js', 'Tailwind', 'Figma', 'Illustrator', 'Photoshop'],
		},
	],
} as const;

export const PROJECT_CONTENT = {
	theWikiverse: {
		id: 'the-wikiverse',
		name: 'The Wikiverse',
		route: '/projects/the-wikiverse',
		status: 'In Development',
		projectType: '3D Knowledge Graph Explorer',
		timeline: 'March 2024 - Present',
		description:
			'Java Spring Boot API with a React and TypeScript client that turns Wikipedia exploration into an explorable 3D knowledge graph.',
		summary: [
			'The Wikiverse is a network graph visualization project built to make topic discovery feel spatial instead of linear. Rather than pushing users through a sequence of isolated search results, it places related concepts around them so the shape of a subject becomes visible as they explore.',
			'The system combines a Spring Boot API, Wikidata-backed graph construction, and a browser-based React and P5.js client to turn structured knowledge into an interactive navigable environment.',
		],
		technologies: [
			'Java',
			'Spring Boot',
			'Wikidata Toolkit',
			'TypeScript',
			'React',
			'P5.js',
			'TailwindCSS',
			'Azure CI/CD',
		],
		features: [
			'3D graph generation and rendering for topic exploration.',
			'Fruchterman-Reingold inspired graph layout work adapted for the project domain.',
			'Search-driven node clustering and discovery flow.',
			'Responsive client built in React and TypeScript.',
			'Continuous integration and deployment for alpha delivery.',
		],
	},
	solvedoku: {
		id: 'solvedoku',
		name: 'Solvedoku',
		route: '/projects/solvedoku',
		status: 'Active',
		description:
			'Interactive Sudoku puzzle solver with real-time validation, adjustable solve speed, and a layout that works across devices.',
		technologies: ['React', 'TypeScript', 'TailwindCSS'],
		features: [
			'Step-by-step backtracking solver visualization.',
			'Random puzzle generation with multiple difficulties.',
			'Keyboard-friendly puzzle editing and undo flow.',
			'Responsive board and controls tuned for smaller screens.',
		],
	},
	rockPaperScissors: {
		id: 'rock-paper-scissors',
		name: 'Rock, Paper, Scissors',
		route: '/projects/rock-paper-scissors',
		status: 'Active',
		description:
			'Self-playing Rock, Paper, Scissors simulation with custom motion, collision logic, and a playful DVD-menu energy.',
		technologies: ['TypeScript', 'P5.js', 'TailwindCSS'],
		features: [
			'P5.js-driven simulation and animation system.',
			'Physics-inspired collision behavior and sprite interactions.',
			'Adjustable visual debugging controls and sprite sets.',
			'Responsive presentation for both desktop and mobile routes.',
		],
	},
} as const;
