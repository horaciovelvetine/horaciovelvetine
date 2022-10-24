import { ChevronRightIcon, ChipIcon, CodeIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { WINDOW_DETAILS } from '../../interfaces';
import { DESKTOP_STATE } from '../../interfaces/DesktopState';
import { WindowWrapper } from '../app/WindowWrapper';

export const About = (props: DESKTOP_STATE) => {
	const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
	const [isFocused, setIsFocused] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const windowDetails: WINDOW_DETAILS = {
		id: 2,
		name: 'About',
		content,
		windowPosition,
		setWindowPosition,
		isFocused,
		setIsFocused,
		isVisible,
		setIsVisible,
	};

	return <WindowWrapper details={windowDetails} desktopState={props} />;
};

const skillsListItem = (skills: string) => {
	return (
		<div className='inline-flex items-center mt-1 ml-1'>
			<ChipIcon className='h-4 shrink-0' />
			<p className='ml-2 text-white/95'>{skills}</p>
		</div>
	);
};

export const AppleLink = (link: any) => {
	return (
		<a
			href={link.url}
			className='inline-flex items-center transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1 tracking-tight text-dodger-blue font-light'
			key={link.url}>
			{link.text}
			<ChevronRightIcon className='h-4' />
		</a>
	);
};

const socialLinks = [
	{ text: 'Github', url: 'https://github.com/horaciovelvetine' },
	{ text: 'LinkedIn', url: 'https://www.linkedin.com/in/james-tillman-43a2828b' },
	{ text: 'Medium', url: 'https://horaciovelvetine.medium.com' },
	{ text: 'Twitter', url: 'https://twitter.com/HoraceVelvetine' },
	{ text: 'Contact', url: 'mailto:horaciovelvetine@gmail.com?subject=I%20Saw%20Your%20Resume%20and...' },
];

const summaryInfo = {
	name: 'James Tillman',
	role: 'Full-Stack Developer',
	summary: 'I build modern and creative web applications that solve problems for clients and make happy users.',
	languages: 'Ruby, JavaScript, TypeScript, HTML, CSS, SQL',
	tools: 'Sinatra, Ruby on Rails, React.js, Node.js, SQLite, PostgreSQL, GitHub, Git, Heroku, AWS',
	libraries: 'Redux & Hooks, Jest, Cypress, React-Query, TailwindCSS, BootStrap, Material UI, Headless UI',
	gems: 'Devise, OmniAuth, Webpacker, Rack, Faker, Nokogiri, ActiveRecord, pg_search, Capybara, .rspec',
};

const content = (
	<div className='relative w-96'>
		{/* //! Video Headshot */}
		<div
			className='flex w-32 mx-auto my-2 transition duration-300 ease-in-out border-2 rounded-full border-acc-gray/20 drop-shadow-lg hover:scale-105 hover:-translate-y-1 hover:drop-shadow-2xl'
			key='animated-headshot'
			id='animated-headshot'>
			<video autoPlay loop muted className='rounded-full'>
				<img src='src/assets/StillHeadshot.png' />
				<source src='src/assets/HomeHeadshot.mp4' type='video/mp4' />
			</video>
		</div>

		{/* //! Info & Links Start */}
		<div className='mx-2 mb-3 text-center'>
			<p className='text-xl font-semibold leading-none tracking-wider'>{summaryInfo.name}</p>
			<p className='text-sm text-ui-text tracking-tighter mb-1.5'>{summaryInfo.role}</p>
			<p className='text=sm text-ui-text  mb-1.5'>{summaryInfo.summary}</p>
			<div className='inline-flex font-light tracking-tighter text-dodger-blue gap-1 mb-1.5'>
				{socialLinks.map(link => {
					return AppleLink(link);
				})}
			</div>

			<ul id='skills-summary' className='mt-2 text-sm tracking-tight text-left text-ui-text'>
				<li id='skills-languages' key='skills-languages' className='mb-2 ml-2'>
					Languages:
					{skillsListItem(summaryInfo.languages)}
				</li>
				<li id='skills-tools' key='skills-tools' className='mb-1 ml-2'>
					Tools:
					{skillsListItem(summaryInfo.tools)}
				</li>
				<li id='skills-libs' key='skills-libs' className='mb-1 ml-2'>
					Libraries:
					{skillsListItem(summaryInfo.libraries)}
				</li>
				<li id='skills-languages' key='skills-gems' className='mb-1 ml-2'>
					Gems:
					{skillsListItem(summaryInfo.gems)}
				</li>
			</ul>
		</div>
	</div>
);

export const AboutDockIcon = (desktopState: DESKTOP_STATE) => {
	return (
		<div
			className='relative bg-window h-14 w-14 rounded p-1 shadow-lg border hover:scale-110 hover:-translate-y-6 transition-all duration-200'
			onClick={() => {
				desktopState.setVisibleWindows(prev => {
					return [...prev, 2];
				});
				desktopState.setFocusedWindow(2);
			}}>
			<span className='inline-flex text-white'>
				<CodeIcon className='h-5 stroke-white stroke-0 pr-[1px]' />_
			</span>
			{/* if window is visible render... */}
			{desktopState.visibleWindows.includes(2) && (
				<div className='absolute h-[5px] w-[5px] inset-x-[23px] -bottom-[14px] rounded-full bg-white/[0.85]'></div>
			)}
		</div>
	);
};
