// import { AnimatedHeadshot, InfoMe, ContactMe, SkillsSummary } from '.';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { SocialLink } from '../interfaces';
import { WindowCard } from '.';

const socialLinks: SocialLink[] = [
	{ text: 'Github', url: 'https://github.com/horaciovelvetine' },
	{ text: 'LinkedIn', url: 'https://www.linkedin.com/in/james-tillman-43a2828b' },
	{ text: 'Medium', url: 'https://horaciovelvetine.medium.com' },
	{ text: 'Twitter', url: 'https://twitter.com/HoraceVelvetine' },
	{ text: 'Contact', url: 'mailto:horaciovelvetine@gmail.com?subject=I%20Saw%20Your%20Resume%20and...' },
];

const socialLink = ({ text, url }: SocialLink) => {
	return (
		<a
			href={url}
			className='inline-flex items-center transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1 tracking-tight text-dodger-blue font-light'
			key={url}>
			{text}
			<ChevronRightIcon className='h-4' />
		</a>
	);
};

const summaryInfo = {
	name: 'James Tillman',
	role: 'Full-Stack Developer',
	summary: 'I build modern and creative web applications that solve problems for clients and make happy users.',
	languages: 'Ruby, JavaScript, TypeScript, HTML, CSS, SQL',
	tools: 'Sinatra, Ruby on Rails, React.js, Node.js, SQLite, PostgreSQL, GitHub, Git, Heroku, AWS',
	libraries: 'Redux & Hooks, Jest, Cypress, React-Query, TailwindCSS, BootStrap, Material UI, Headless UI',
	gems: 'Devise, OmniAuth, Webpacker, Rack, Faker, Nokogiri, ActiveRecord, pg_search, Capybara, .rspec',
};

const contents: JSX.Element = (
	<>
		{/* //! Video Headshot */}
		<div
			className='flex my-2 mx-auto w-32 rounded-full border-2 border-acc-gray/20 drop-shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-1 ease-in-out hover:drop-shadow-2xl'
			key='animated-headshot'
			id='animated-headshot'>
			<video autoPlay loop muted className='rounded-full'>
				<img src='src/assets/StillHeadshot.png' />
				<source src='src/assets/HomeHeadshot.mp4' type='video/mp4' />
			</video>
		</div>

		{/* //! Prose Info & Links Start */}
		<div className='mx-2 text-center'>
			<p className='text-xl font-semibold tracking-wider leading-none'>{summaryInfo.name}</p>
			<p className='text-sm text-ui-text tracking-tighter mb-1.5'>{summaryInfo.role}</p>
			<p className='text=sm text-ui-text  mb-1.5'>{summaryInfo.summary}</p>
			{/* ALL Social Contact Links*/}
			<div className='inline-flex font-light tracking-tighter text-dodger-blue gap-1 mb-1.5'>
				{socialLinks.map((Link) => {
					return socialLink(Link);
				})}
				{/* ALL Skills */}
			</div>
			<p className='text-ui-text tracking-tighter underline underline-offset-auto mb-1.5'>Skills:</p>

			<ul id='skills-summary' className='text-sm text-ui-text tracking-tight text-left'>
				<li id='skills-languages' key='skills-languages' className=''>
					Languages: {summaryInfo.languages}
				</li>
				<li id='skills-tools' key='skills-tools' className=''>
					Tools: {summaryInfo.tools}
				</li>
				<li id='skills-libs' key='skills-libs' className=''>
					Libraries: {summaryInfo.libraries}
				</li>
				<li id='skills-languages' key='skills-gems' className=''>
					Gems: {summaryInfo.gems}
				</li>
			</ul>
		</div>

	</>
);

const summaryWindowDetails = {
	style: 'mx-auto my-auto w-96',
	title: '@horaciovelvetine',
	contents,
};

export const Summary = () => {
	return (
			<WindowCard {...summaryWindowDetails} />
	);
};
