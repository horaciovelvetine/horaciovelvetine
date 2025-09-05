import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
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
	SpringBootIcon,
	ReactIcon,
	VueIcon,
	RailsIcon,
	PostgreSQLIcon,
	SQLiteIcon,
	TailwindCSSIcon,
	BootstrapIcon,
	PhotoshopIcon,
	IllustratorIcon,
	P5JSIcon,
	FigmaIcon,
} from '../../../../assets';
import { ToolGridItem } from './tool-grid-item';

/**
 * DevkstopToolsGrid Component
 *
 * A responsive grid component that displays developer tools, technologies, and skills
 * organized into three categories: Languages, Frameworks, and Visual Tools.
 *
 * Features:
 * - Uses Headless UI Disclosure components for collapsible sections
 * - Each category can be expanded/collapsed independently
 * - Responsive grid layout that adapts to different screen sizes
 * - Hover effects and smooth transitions for enhanced user experience
 * - Interactive tool items with external links to documentation/websites
 *
 * The component includes:
 * - Programming languages (C/C++, Java, JavaScript, TypeScript, Ruby, Python, CSS, HTML, SQL)
 * - Frameworks and libraries (Spring Boot, React, Vue, Rails, PostgreSQL, SQLite)
 * - Visual and design tools (Tailwind CSS, Bootstrap, Photoshop, Illustrator, P5.js, Figma)
 *
 * Each tool item displays an icon, title, and includes hover effects with brand-specific colors.
 * The grid layout is responsive with different column counts for various screen sizes.
 *
 * @component
 */

export function DevkstopToolsGrid() {
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
	);
}
