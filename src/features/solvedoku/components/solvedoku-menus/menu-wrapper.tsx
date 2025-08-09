/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type {
	PuzzleDifficulty,
	SiteSettings,
	SolvedokuGameState,
} from '../../../../types';
import { CloseIcon } from '../../../../assets';
import { SolvedokuIcon } from '../solvedoku-icon';


interface MobileMenuWrapperProps {
	siteSettings: SiteSettings;
	solvedokuState: SolvedokuGameState;
	showMenu: boolean;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
	menuMainTitle: string;
	setCurrentPuzzleDifficultyDisplay: Dispatch<SetStateAction<PuzzleDifficulty>>;
	Content: (props: any) => ReactNode;
}

export function MenuWrapper({
	siteSettings,
	solvedokuState,
	showMenu,
	setShowMenu,
	menuMainTitle,
	Content,
	setCurrentPuzzleDifficultyDisplay,
}: MobileMenuWrapperProps) {
	return (
		<div
			className={`absolute w-full -bottom-2 transition-transform duration-200 pb-2 ${showMenu ? '' : 'translate-y-300'}`}>
			<div className='flex flex-col rounded-lg bg-stone-900 px-2 pt-2 items-center gap-1'>
				<div
					className='flex w-full justify-end'
					onClick={() => {
						setShowMenu(false);
					}}>
					<CloseIcon size='size-6 xs:size-8 sm:size-10' />
				</div>
				<SolvedokuIcon size='size-16 xs:size-20 sm:size-24 md:size-42 lg:size-48' />
				<h3 className='font-semibold tracking-tighter xs:text-lg sm:text-2xl'>
					{menuMainTitle}
				</h3>
				{/* ADD MAIN CONTENT */}
				<Content
					setShowMenu={setShowMenu}
					solvedokuState={solvedokuState}
					siteSettings={siteSettings}
					setCurrentPuzzleDifficultyDisplay={setCurrentPuzzleDifficultyDisplay}
				/>
			</div>
		</div>
	);
}
