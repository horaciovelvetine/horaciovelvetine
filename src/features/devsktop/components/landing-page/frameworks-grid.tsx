import {
	PostgreSQLIcon,
	RailsIcon,
	ReactIcon,
	SpringBootIcon,
	SQLiteIcon,
	VueIcon,
} from '../../../../assets';
import { ToolGridItem } from './tool-grid-item';

export function FrameworksGrid() {
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
	return (
		<div className='my-1'>
			<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl md:hidden'>
				Frameworks:
			</h3>
			<ul className='grid grid-cols-3 md:grid-cols-4 gap-1 xs:gap-2 xs'>
				<li className='hidden md:visible md:inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75 '>
					<h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75 '>
						Frameworks
					</h3>
				</li>
				{frameworks.map(lang => (
					<ToolGridItem
						key={lang.title}
						{...lang}
					/>
				))}
			</ul>
		</div>
	);
}
