import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { LandingPageIntro } from '../components';
import {
	CPPIcon,
	JavaIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	RubyIcon,
	PythonIcon,
	CSSIcon,
	HTMLIcon,
	SQLIcon,
	PostgreSQLIcon,
	RailsIcon,
	ReactIcon,
	SpringBootIcon,
	SQLiteIcon,
	VueIcon,
	BootstrapIcon,
	FigmaIcon,
	IllustratorIcon,
	P5JSIcon,
	PhotoshopIcon,
	TailwindCSSIcon,
	GithubIcon,
	LinkedInIcon,
} from '../../../assets';
import { ToolGridItem } from '../components/landing-page/tool-grid-item';
import { GITHUB, LINKEDIN } from '../../../consts/urls';

export function MainLandingWindow() {
	const languages = [
		{
			title: 'C / C++',
			Icon: CPPIcon,
			hoverFill: 'group-hover:text-[#004482]',
			href: 'https://isocpp.org/std/the-standard',
		},
		{
			title: 'Java',
			Icon: JavaIcon,
			hoverFill: 'group-hover:text-[#EA2D2E]',
			href: 'https://www.java.com/en/',
		},
		{
			title: 'JavaScript',
			Icon: JavaScriptIcon,
			hoverFill: 'group-hover:text-[#F0DB4F]',
			href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview',
		},
		{
			title: 'TypeScript',
			Icon: TypeScriptIcon,
			hoverFill: 'group-hover:text-[#007acc]',
			href: 'https://www.typescriptlang.org/',
		},
		{
			title: 'Ruby',
			Icon: RubyIcon,
			hoverFill: 'group-hover:text-[#d91404]',
			href: 'https://www.ruby-lang.org/en/',
		},
		{
			title: 'Python',
			Icon: PythonIcon,
			hoverFill: 'group-hover:text-[#FFD845]',
			href: 'https://www.python.org/',
		},
		{
			title: 'CSS',
			Icon: CSSIcon,
			hoverFill: 'group-hover:text-[#1572B6]',
			href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		},
		{
			title: 'HTML',
			Icon: HTMLIcon,
			hoverFill: 'group-hover:text-[#E44D26]',
			href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		},
		{
			title: 'SQL',
			Icon: SQLIcon,
			hoverFill: 'group-hover:text-[#00AA00]',
			href: 'https://en.wikipedia.org/wiki/SQL',
		},
	];

	const frameworks = [
		{
			title: 'Spring Boot',
			Icon: SpringBootIcon,
			hoverFill: 'group-hover:text-[#77bc1f]',
			href: 'https://spring.io/',
		},
		{
			title: 'React',
			Icon: ReactIcon,
			hoverFill: 'group-hover:text-[#61DAFB]',
			href: 'https://react.dev/',
		},
		{
			title: 'Vue',
			Icon: VueIcon,
			hoverFill: 'group-hover:text-[#35495e]',
			href: 'https://vuejs.org/',
		},
		{
			title: 'Ruby on Rails',
			Icon: RailsIcon,
			hoverFill: 'group-hover:text-[#C00]',
			href: 'https://rubyonrails.org/',
		},
		{
			title: 'PostgreSQL',
			Icon: PostgreSQLIcon,
			hoverFill: 'group-hover:text-[#336791]',
			href: 'https://www.postgresql.org/',
		},
		{
			title: 'SQLite',
			Icon: SQLiteIcon,
			hoverFill: 'group-hover:text-[#fff]',
			href: 'https://www.sqlite.org/index.html',
		},
	];

	const tools = [
		{
			title: 'Tailwind CSS',
			Icon: TailwindCSSIcon,
			hoverFill: 'group-hover:text-[#38bdf8]',
			href: 'https://tailwindcss.com/',
		},
		{
			title: 'Bootstrap',
			Icon: BootstrapIcon,
			hoverFill: 'group-hover:text-[#fff]',
			href: 'https://getbootstrap.com/',
		},
		{
			title: 'Photoshop',
			Icon: PhotoshopIcon,
			hoverFill: 'group-hover:text-[#001e36]',
			href: 'https://www.adobe.com/products/photoshop',
		},
		{
			title: 'Illustrator',
			Icon: IllustratorIcon,
			hoverFill: 'group-hover:text-[#330000]',
			href: 'https://www.adobe.com/products/illustrator',
		},
		{
			title: 'P5.js',
			Icon: P5JSIcon,
			hoverFill: 'group-hover:text-[#ed225d]',
			href: 'https://p5js.org/',
		},
		{
			title: 'Figma',
			Icon: FigmaIcon,
			hoverFill: 'group-hover:text-[#fff]',
			href: 'https://www.figma.com/',
		},
	];
	return (
		<>
			<LandingPageIntro />
			<p className='text-center font-bold text-2xl/5 xs:text-3xl/7 sm:text-4xl/10 mb-2 px-2 py-1 tracking-tight sm:tracking-tight text-white'>
				I design and develop bespoke solutions for challenging problems
				leveraging technology and creativity at every turn.
			</p>

			{/* LANGUAGES */}
			<div className='flex flex-wrap justify-center items-start gap-4 py-2'>
				<Disclosure>
					<DisclosureButton className='data-open:hidden hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-900/75 transition-all duration-20'>
						<div className='border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75'>
							<h2 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
								Languages
							</h2>
						</div>
					</DisclosureButton>
					<DisclosurePanel
						transition
						className='origin-top transition duration-200 ease-in-out'>
						<div className='my-1'>
							<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl md:hidden'>
								Languages
							</h3>
							<ul className='grid grid-cols-3 md:grid-cols-5 gap-1 xs:gap-2 xs'>
								<DisclosureButton className='hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-900/75 transition-all duration-20'>
									<li className='hidden md:visible md:inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75'>
										<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
											Languages
										</h3>
									</li>
								</DisclosureButton>
								{languages.map(lang => (
									<ToolGridItem
										key={lang.title}
										{...lang}
									/>
								))}
							</ul>
						</div>
					</DisclosurePanel>
				</Disclosure>

				{/* FRAMEWORKS */}
				<Disclosure>
					<DisclosureButton className='data-open:hidden hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-900/75 transition-all duration-20'>
						<div className='border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75'>
							<h2 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
								Frameworks
							</h2>
						</div>
					</DisclosureButton>
					<DisclosurePanel
						transition
						className={`origin-top transition duration-200 ease-in-out`}>
						{/* <LanguagesGrid /> */}
						<div className='my-1'>
							<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl md:hidden'>
								Frameworks
							</h3>
							<ul className='grid grid-cols-4 gap-1 xs:gap-2 xs'>
								<DisclosureButton className='hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-900/75 transition-all duration-20'>
									<li className='hidden md:visible md:inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75'>
										<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
											Frameworks
										</h3>
									</li>
								</DisclosureButton>
								{frameworks.map(lang => (
									<ToolGridItem
										key={lang.title}
										{...lang}
									/>
								))}
							</ul>
						</div>
					</DisclosurePanel>
				</Disclosure>

				{/* VISUALS */}
				<Disclosure>
					<DisclosureButton className='data-open:hidden hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-900/75 transition-all duration-200'>
						<div className='border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75'>
							<h2 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
								Visuals
							</h2>
						</div>
					</DisclosureButton>
					<DisclosurePanel
						transition
						className={`origin-top transition duration-200 ease-in-out`}>
						<div className='my-1'>
							<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl md:hidden'>
								Visuals
							</h3>
							<ul className='grid grid-cols-4 gap-1 xs:gap-2 xs'>
								<DisclosureButton className='hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-900/75 transition-all duration-200'>
									<li className='inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75 w-full'>
										<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
											Visuals
										</h3>
									</li>
								</DisclosureButton>
								{tools.map(lang => (
									<ToolGridItem
										key={lang.title}
										{...lang}
									/>
								))}
							</ul>
						</div>
					</DisclosurePanel>
				</Disclosure>
			</div>
			<div className='flex justify-center items-center text-lg mx-auto font-bold gap-2 border-t-2 border-stone-300/30 pt-1.5 mt-1'>
				<a
					className='inline-flex gap-1 text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'
					target='_blank'
					rel='noopener noreferrer'
					href={GITHUB}>
					<span aria-hidden={true}>&rarr;</span>
					Github
					<GithubIcon
						size='size-6'
						ariaHidden={true}
						classes='text-white'
					/>
				</a>
				<a
					className='inline-flex gap-1 text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'
					target='_blank'
					rel='noopener noreferrer'
					href={LINKEDIN}>
					<span aria-hidden={true}>&rarr;</span>
					LinkedIn
					<LinkedInIcon
						size='size-6'
						ariaHidden={true}
						classes='text-sky-500'
					/>
				</a>
			</div>
		</>
	);
}
