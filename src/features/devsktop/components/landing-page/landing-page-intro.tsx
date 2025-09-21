import { GithubIcon, LinkedInIcon } from '../../../../assets';
import {
	GradientLinkText,
	InlineSocialLink,
	VideoHeadshot,
} from '../../../../components';
import { GITHUB, LINKEDIN } from '../../../../consts/urls';

/**
 * LandingPageIntro component that renders the primary landing page content for the devsktop interface
 *
 * This component serves as the main introduction page featuring:
 * - Personal introduction with name and handle
 * - Video headshot component
 * - Professional title and role description with gradient styling
 * - Responsive layout that adapts to different screen sizes
 *
 * The layout adjusts from a vertical stack on mobile to a horizontal layout on larger screens,
 * with gradient text effects and interactive hover states for all links and icons.
 */

export function LandingPageIntro() {
	return (
		<>
			<div className='flex flex-col items-center font-extrabold'>
				<div className='flex flex-col items-center md:flex-row lg:justify-center'>
					<VideoHeadshot />

					<div>
						<div className='flex justify-center items-baseline'>
							<h1 className='tracking-tighter text-3xl sm:text-4xl md:text-5xl'>
								👋 I'm James
							</h1>
						</div>

						<GradientLinkText
							text='@horaciovelvetine'
							url={GITHUB}
							classes='text-2xl/6 xs:text-3xl/8 sm:text-4xl/10 md:text-5xl/12 lg:text-6xl/14 from-rose-500 via-purple-500 to-sky-500 pb-2 px-1 sm:px-2.5 tracking-tighter'
						/>
					</div>
				</div>

				<div className='flex justify-center items-center md:ml-42'>
					<p className='text-xl/5 xs:text-2xl/6 sm:text-3xl/7 md:text-4xl/8 lg:text-5xl/9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500 pb-1 md:pb-2.5 text-center'>
						Full-Stack Developer & <br /> Creative Technologist
					</p>
				</div>
			</div>
			<p className='text-center font-bold text-lg/5 xs:text-xl/6 sm:text-2xl/7 md:text-3xl/8 px-2 py-1 md:py-2 tracking-tight sm:tracking-tighter text-white '>
				I design and develop bespoke solutions for challenging problems
				leveraging technology and creativity at every turn.
			</p>
			<div className='flex justify-center items-center text-lg mx-auto font-bold gap-2 pt-2 mt-2 border-t border-stone-300/30'>
				<InlineSocialLink
					text='Github'
					href={GITHUB}
					SocialIcon={GithubIcon}
					iconStyle='text-white'
				/>
				<InlineSocialLink
					text='LinkedIn'
					href={LINKEDIN}
					SocialIcon={LinkedInIcon}
					iconStyle='text-sky-500'
				/>
			</div>
		</>
	);
}
