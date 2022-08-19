// import { AnimatedHeadshot, InfoMe, ContactMe, SkillsSummary } from '.';
import { ChipIcon } from '@heroicons/react/solid';
import { LinkGenInt } from '../interfaces';
import { WindowCard, AppleLink } from '.';

const skillsListItem = (skills: string) => {
	return (
		<div className='inline-flex items-center mt-1 ml-1'>
			<ChipIcon className='h-4 shrink-0' />
			<p className='ml-2 text-white/95'>{skills}</p>
		</div>
	);
};

const socialLinks: LinkGenInt[] = [
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

const contents: JSX.Element = (
	<>
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

		{/* //! Prose Info & Links Start */}
		<div className='mx-2 mb-3 text-center'>
			<p className='text-xl font-semibold leading-none tracking-wider'>{summaryInfo.name}</p>
			<p className='text-sm text-ui-text tracking-tighter mb-1.5'>{summaryInfo.role}</p>
			<p className='text=sm text-ui-text  mb-1.5'>{summaryInfo.summary}</p>
			{/* ALL Social Contact Links*/}
			<div className='inline-flex font-light tracking-tighter text-dodger-blue gap-1 mb-1.5'>
				{socialLinks.map(Link => {
					return AppleLink(Link);
				})}
				{/* ALL Skills */}
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
	</>
);

let getIntInRange = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const summaryWindowDetails = {
	style: 'w-96',
	title: 'Summary - @horaciovelvetine',
	contents,
	defaultPosition: { x: getIntInRange(10, 1000), y: getIntInRange(10, 185) },
};

export const Summary = () => {
	return <WindowCard {...summaryWindowDetails} />;
};
