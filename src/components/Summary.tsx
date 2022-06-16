// import { AnimatedHeadshot, InfoMe, ContactMe, SkillsSummary } from '.';
import { ChipIcon } from '@heroicons/react/solid';
import { LinkGenInt } from '../interfaces';
import { WindowCard, AppleLink } from '.';

const skillsListItem = (skills: string) => {
	return (
		<div className='inline-flex items-center ml-1 mt-1'>
			<ChipIcon className='h-4 shrink-0' />
			<p className='text-white/95 ml-2'>{skills}</p>
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
			className='flex my-2 mx-auto w-32 rounded-full border-2 border-acc-gray/20 drop-shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-1 ease-in-out hover:drop-shadow-2xl'
			key='animated-headshot'
			id='animated-headshot'>
			<video autoPlay loop muted className='rounded-full'>
				<img src='src/assets/StillHeadshot.png' />
				<source src='src/assets/HomeHeadshot.mp4' type='video/mp4' />
			</video>
		</div>

		{/* //! Prose Info & Links Start */}
		<div className='mx-2 text-center mb-3'>
			<p className='text-xl font-semibold tracking-wider leading-none'>{summaryInfo.name}</p>
			<p className='text-sm text-ui-text tracking-tighter mb-1.5'>{summaryInfo.role}</p>
			<p className='text=sm text-ui-text  mb-1.5'>{summaryInfo.summary}</p>
			{/* ALL Social Contact Links*/}
			<div className='inline-flex font-light tracking-tighter text-dodger-blue gap-1 mb-1.5'>
				{socialLinks.map((Link) => {
					return AppleLink(Link);
				})}
				{/* ALL Skills */}
			</div>

			<ul id='skills-summary' className='text-sm text-ui-text tracking-tight text-left mt-2'>
				<li id='skills-languages' key='skills-languages' className='ml-2 mb-2'>
					Languages:
					{skillsListItem(summaryInfo.languages)}
				</li>
				<li id='skills-tools' key='skills-tools' className='ml-2 mb-1'>
					Tools:
					{skillsListItem(summaryInfo.tools)}
				</li>
				<li id='skills-libs' key='skills-libs' className='ml-2 mb-1'>
					Libraries:
					{skillsListItem(summaryInfo.libraries)}
				</li>
				<li id='skills-languages' key='skills-gems' className='ml-2 mb-1'>
					Gems:
					{skillsListItem(summaryInfo.gems)}
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
	return <WindowCard {...summaryWindowDetails} />;
};
