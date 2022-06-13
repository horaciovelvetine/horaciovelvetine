import { socialLink, videoHeadshot, infoMe, contactMe, skillsSummary } from '.';
import { SocialLink, WindowDetailsInterface } from '../../interfaces';
import { WindowContainer } from '../window';

const windowStyle =
	'flex mx-auto my-auto h-content w-96 card backdrop-blur-sm bg-bg-primary-900/80 shadow-lg text-white '; //TODO: double check whats being given by default to the window in Container

const socialLinks: SocialLink[] = [
	{ text: 'Github', url: 'https://github.com/horaciovelvetine' },
	{ text: 'LinkedIn', url: 'https://www.linkedin.com/in/james-tillman-43a2828b' },
	{ text: 'Medium', url: 'https://horaciovelvetine.medium.com' },
	{ text: 'Twitter', url: 'https://twitter.com/HoraceVelvetine' },
];

const info = {
	name: 'James Tillman',
	role: 'Full-Stack Developer',
	summary: 'I build modern and creative web applications that solve problems for clients and make happy users.',
	languages: ['Ruby', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
	framework: ['Sinatra, Rails, React.js/ts'],
	tools: {
		gen: ['AWS', 'Replit.io', 'PostgreSQL', 'SQLite', 'MySQL'],
		libs: [
			'Redux & Hooks',
			'Jest',
			'Cypress',
			'React-Query',
			'TailwindCSS',
			'Bootstrap',
			'Material UI',
			'HeadlessUI',
			'Vite',
			'Discord.js',
		],
		gems: [
			'Devise',
			'OmniAuth',
			'ActiveRecord',
			'.Rspec',
			'Capybara',
			'Webpacker',
			'fastJSON',
			'pg_search',
			'nokogiri',
		],
	}, //TODO: This structure is what needs to be overhauled => the info should live close to the item which utilizes it
	contact: 'mailto:horaciovelvetine@gmail.com?subject=I%20Saw%20Your%20Resume%20and...',
	socialLinks: socialLinks,
	socialLink,
	videoHeadshot,
	infoMe,
	contactMe,
	skillsSummary
};

const windowDetails: WindowDetailsInterface = {
	windowStyle,
	windowTitle: `@horaciovelvelvetine`,
	content: {
		info,
	},
};

export const Summary = () => {
	return WindowContainer(windowDetails);
};
