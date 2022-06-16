// import { AnimatedHeadshot, InfoMe, ContactMe, SkillsSummary } from '.';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { SocialLink } from '../interfaces';
import { WindowCard } from '.';

const socialLinks: SocialLink[] = [
	{ text: 'Github', url: 'https://github.com/horaciovelvetine' },
	{ text: 'LinkedIn', url: 'https://www.linkedin.com/in/james-tillman-43a2828b' },
	{ text: 'Medium', url: 'https://horaciovelvetine.medium.com' },
	{ text: 'Twitter', url: 'https://twitter.com/HoraceVelvetine' },
];

const socialLink = ({ text, url }: SocialLink) => {
	return (
		<a href={url} className='mx-1 inline-flex items-center' key={url}>
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
		<div
			className='flex my-2 mx-auto w-32 rounded-full border-2 border-acc-gray/20 drop-shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-1 ease-in-out hover:drop-shadow-2xl'
			key='animated-headshot'
			id='animated-headshot'>
			<video autoPlay loop muted className='rounded-full'>
				<img src='src/assets/StillHeadshot.png' />
				<source src='src/assets/HomeHeadshot.mp4' type='video/mp4' />
			</video>
		</div>
		<div className='py-4 mx-2 text-center'>
			<p className='text-xl font-semibold tracking-wider leading-none'>{summaryInfo.name}</p>
			<a
				href='https://flatironschool.com/courses/coding-bootcamp/'
				className='text-sm  text-ui-text/80 tracking-tighter hover:underline hover:underline-offset-0 hover:decoration-icon-fill '>
				{summaryInfo.role}
			</a>
		</div>

		<div className='mx-auto text-center mb-4 text-sm'>{summaryInfo.summary}</div>

		<div className='flex mx-2 mb-4'>
			<p className='flex text-sm text-ui-text tracking-tighter font-light'>
				Find me on:
				<span className='translate-x-1 inline-flex items-center font-normal text-dodger-blue gap-1'>
					{socialLinks.map((link) => {
						return socialLink(link);
					})}
				</span>
			</p>
		</div>
		<div className='mx-2 text-start tracking-tighter' key='skills-summary-info' id='skills-summary'>
			<ul className='text-sm text-ui-text/80 leading-relaxed'>
				<li id='languages'>
					Languages: <span className='text-white tracking-normal pl-1'>{summaryInfo.languages}</span>
				</li>
				<li id='frameworks'>
					Libraries/Tools: <span className='text-white tracking-normal pl-1'>{summaryInfo.tools}</span>
				</li>
				<li id='javaScript-TypeScript'>JS/TS:</li>
				<div className='my-1 mx-2'>
					<li id='libs-js' className='ml-2 leading-normal'>
						<span className='text-white tracking-normal'> + {summaryInfo.libraries}</span>
					</li>
				</div>
				<li id='javaScript-TypeScript'>Ruby:</li>
				<div className='my-1 mx-2'>
					<li id='libs-js' className='ml-2 leading-normal'>
						<span className='text-white tracking-normal'>+ {summaryInfo.gems}</span>
					</li>
				</div>
			</ul>
		</div>
			<a
		key='contact-me-button'
		id='contact-me'
		type='button'
		href='mailto:horaciovelvetine@gmail.com?subject=I%20Saw%20Your%20Resume%20and...'
		className='w-content mx-auto mb-4 mt-2 transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1 tracking-tight text-dodger-blue font-light inline-flex items-center leading-4'>
		Contact Me
		<ChevronRightIcon className='h-6' />
	</a>
	</>
);

const summaryWindowDetails = {
	style: 'mx-auto my-auto w-96',
	title: '@horaciovelvetine',
	contents,
};

export const Summary = () => {
	return (
		<div className='h-screen w-screen'>
			<WindowCard {...summaryWindowDetails} />;
		</div>
	);
};
