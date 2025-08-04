import type { LayoutProps } from '../../types';

import { SolvedokuWindowMain } from '../../features/solvedoku';

export function MobileLayout(props: LayoutProps) {
	return (
		<main className='min-h-screen w-full bg-cover saturate-[1.5] brightness-90 font-sans min-w-[320px]'>
			<div className='bg-stone-900/90 h-screen'>
				<SolvedokuWindowMain
					siteSettings={props.siteSettings}
					windowState={props.windowManager.solvedokuWindow}
				/>
			</div>
		</main>
	);
}
