import {
	CPPIcon,
	CSSIcon,
	HTMLIcon,
	JavaIcon,
	JavaScriptIcon,
	PythonIcon,
	RubyIcon,
	SQLIcon,
	TypeScriptIcon,
} from '../../../../assets';
import { ToolGridItem } from './tool-grid-item';


export function LanguagesGrid() {
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
	return (
		<div className='my-1'>
			<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl md:hidden'>
				Languages:
			</h3>
			<ul className='grid grid-cols-3 md:grid-cols-5 gap-1 xs:gap-2 xs'>
				<li className='hidden md:visible md:inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75'>
					<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75'>
						Languages
					</h3>
				</li>
				{languages.map(lang => (
					<ToolGridItem
						key={lang.title}
						{...lang}
					/>
				))}
			</ul>
		</div>
	);
}
