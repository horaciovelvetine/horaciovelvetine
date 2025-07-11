import type { DropdownMenuOption } from '../../../types/site/dropdown-menu-option';

interface DropdownMenuProps {
	options: DropdownMenuOption[];
}

export function DropdownMenuOptionsContainer({ options }: DropdownMenuProps) {
	return (
		<div className='absolute bg-zinc-900/80 backdrop-blur-2xl border border-white/40 shadow-md rounded-sm px-2 my-[3.25px]'>
			<ul className='flex flex-col text-sm my-0.5'>
				{options.map(menuOption => (
					<div
						key={menuOption.id}
						className={menuOption.hasHorizontalBreak ? 'border-b border-white/75' : ''}>
						{menuOption.sectionHeader && (
							<h5 className='text-xs text-zinc-400 tracking-tighter px-2 mt-1'>{menuOption.sectionHeader}</h5>
						)}

						<li className='w-full text-nowrap my-1 px-2 py-0.5 rounded-sm hover:bg-sky-700/90'>
							<button
								type='button'
								className='text-left'
								onClick={() => {
									console.log('do option click');
								}}>
								{menuOption.title}
							</button>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
}
