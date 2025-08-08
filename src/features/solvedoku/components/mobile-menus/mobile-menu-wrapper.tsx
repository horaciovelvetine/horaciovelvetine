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
	showMobileMenu: boolean;
	setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
	menuMainTitle: string;
	setCurrentPuzzleDifficultyDisplay: Dispatch<SetStateAction<PuzzleDifficulty>>;
	Content: (props: any) => ReactNode;
}

export function MobileMenuWrapper({
	siteSettings,
	solvedokuState,
	showMobileMenu,
	setShowMobileMenu,
	menuMainTitle,
	Content,
	setCurrentPuzzleDifficultyDisplay,
}: MobileMenuWrapperProps) {
	return (
		<div
			className={`absolute w-full -bottom-2 transition-transform duration-200 ${showMobileMenu ? '' : 'translate-y-300'}`}>
			<div className='flex flex-col bg-stone-900 text-white px-2 pt-2 items-center gap-1'>
				<div
					className='flex w-full justify-end'
					onClick={() => {
						setShowMobileMenu(false);
					}}>
					<CloseIcon size='size-6 xs:size-8 sm:size-10' />
				</div>
				<SolvedokuIcon iconSize='size-16 xs:size-20 sm:size-24' />
				<h3 className='font-semibold tracking-tighter xs:text-lg sm:text-2xl'>
					{menuMainTitle}
				</h3>
				{/* ADD MAIN CONTENT */}
				<Content
					setShowMobileMenu={setShowMobileMenu}
					solvedokuState={solvedokuState}
					siteSettings={siteSettings}
					setCurrentPuzzleDifficultyDisplay={setCurrentPuzzleDifficultyDisplay}
				/>
			</div>
		</div>
	);
}
