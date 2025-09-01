import { SimpleInlineLink } from '../../../../components';
import { GH_NEW_ISSUES } from '../../../../consts/urls';

/**
 * AboutMenu component displays information about the Rock Paper Scissors simulation game.
 *
 * This component provides an overview of how the game works, explains the rules of Rock Paper Scissors,
 * and includes helpful links for users. It's designed to be displayed as part of the game's menu system.
 *
 * Features:
 * - Game description and inspiration
 * - Interactive controls explanation (tap to pause, settings menu)
 * - Traditional Rock Paper Scissors rules
 * - Link to report issues
 */
export function RPSAboutMenu() {
	return (
		<div className='pb-2 tracking-tight mx-1 md:mx-8'>
			<div className='flex flex-col gap-1 md:gap-2 max-h-[calc(100vh-12rem)]'>
				<p className='text-base/4.25 xs:text-xl/5 md:text-2xl/7 text-pretty xs:mx-10 xs:text-center md:mx-12'>
					Inspired by the{' '}
					<SimpleInlineLink
						href='https://bouncingdvdlogo.com/'
						text='DVD icon'
					/>{' '}
					bouncing around your childhood clasroom TV on movie day, this is a
					self playing game of Rock, Paper, Scissors. Each Emoji starts with a
					random charcter and flies around the screen bouncing into one another
					until only the winner remains. Tap the screen to pause anytime, and
					use the settings menu to cusomize, reset, or restart the game at any
					point.
				</p>
				<h4 className='border-b-2 font-bold border-stone-300/30 text-base/4 xs:text-xl/6 lg:text-2xl/6 text-center mx-auto'>
					Rules:
				</h4>
				<ul className='list-disc flex flex-col mx-2 items-center text-base/4 xs:text-xl/5 md:text-xl/6 text-pretty'>
					<li className='list-item'>Rock beats Scissors</li>
					<li className='list-item '>Scissors cuts Paper</li>
					<li className='list-item '>Paper covers Rock</li>
				</ul>
				<p className='text-sm xs:text-base/4 sm:text-xl/5 text-center'>
					Issues?{' '}
					<SimpleInlineLink
						href={GH_NEW_ISSUES}
						text='Let me know!'
					/>
				</p>
			</div>
		</div>
	);
}
