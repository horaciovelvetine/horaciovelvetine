import { createFileRoute } from '@tanstack/react-router';

import { GithubIcon, LinkedInIcon } from '../assets';
import {
	GradientLinkText,
	InlineSocialLink,
	SimpleInlineLink,
} from '../components';
import { GH_REPO, GITHUB, LINKEDIN, MAILTO } from '../consts/urls';

export const Route = createFileRoute('/contact')({
	component: MobileContactPage,
});

/**
 * Mobile Contact Page Component
 *
 * A responsive contact page that provides multiple ways for users to get in touch.
 * Features a prominent email call-to-action, links to social platforms (GitHub, LinkedIn),
 * and contact information with hover effects and transitions.
 *
 * The component uses a centered layout with gradient backgrounds, rings, and shadows
 * for visual appeal. All external links open in new tabs with proper security attributes.
 *
 * @component
 */
function MobileContactPage() {
	return (
		<div className='flex flex-col items-center my-2 xs:my-3 sm:my-4 md:my-6 w-full max-w-full px-1'>
			<div className='bg-stone-900/80 rounded-xl ring-1 ring-stone-300/30 py-3 px-1 xs:px-2 sm:px-4 md:px-6 drop-shadow-2xl mx-0.5 xs:mx-2 sm:mx-4 md:mx-6 xs:py-4 sm:py-6 md:py-8 w-full max-w-[95vw] xs:max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw]'>
				<div className='flex mx-auto items-center justify-center mb-2 xs:mb-3 sm:mb-4 md:mb-6'>
					<h1 className='font-extrabold text-center tracking-tighter text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-1'>
						Contact Me:
					</h1>
				</div>
				<div className='flex flex-col px-1 xs:px-3 sm:px-4 md:px-6 xs:w-4/5 sm:w-3/4 md:w-2/3 mx-auto items-center border-b-2 border-t-2 border-stone-300/30'>
					<p className='font-semibold text-base/tight xs:text-lg sm:text-xl md:text-2xl lg:text-3xl pt-2 xs:pt-3 sm:pt-4 text-center xs:w-5/6 sm:w-4/5 md:w-3/4 px-1'>
						The easiest way to get in touch is simply to{' '}
						<SimpleInlineLink
							href={MAILTO}
							text='email me here'
							showArrow
						/>
					</p>
					<p className='my-2 xs:my-3 sm:my-4 md:my-5 pb-1 xs:pb-2 sm:pb-3 text-center text-base/tight xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-5 xs:leading-6 sm:leading-7 text-white/65 xs:w-11/12 sm:w-5/6 md:w-4/5 px-1'>
						I'm always open to work, or question about work, especially if you
						have a uniquely challenging problem!
					</p>
				</div>
				<div className='flex flex-col sm:gap-2 sm:mx-4 md:mx-8 lg:mx-12'>
					<div className='flex mx-auto mt-2 xs:mt-3 sm:mt-4 md:mt-5 p-1 xs:p-2 sm:p-3 gap-1 xs:gap-2 justify-center items-center'>
						<span className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-300/30'>
							(
						</span>
						<div className='flex flex-col items-center justify-center px-1'>
							<h2 className='tracking-tighter text-center font-extrabold text-base/6 xs:text-lg/6 sm:text-xl/7 md:text-2xl/7 lg:text-3xl/8 xl:text-4xl/8'>
								Find me on Github:
							</h2>
							<GradientLinkText
								text='@horaciovelvetine'
								url={GH_REPO}
								classes='text-lg/6 xs:text-xl/6 sm:text-2xl/7 md:text-3xl/7 lg:text-4xl/8 xl:text-5xl/8 from-rose-500 via-purple-500 to-sky-500 pb-1 xs:pb-1.5 sm:pb-2 tracking-tighter px-1 xs:px-1.5 sm:px-2 font-extrabold text-center'
							/>
						</div>
						<span className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-300/30'>
							)
						</span>
					</div>
					<div className='flex mx-auto items-center justify-center gap-1 xs:gap-2 sm:gap-3 sm:gap-4 mt-2 xs:mt-3 sm:mt-4 md:mt-5 px-2 xs:px-4 sm:px-4 md:px-6 lg:px-8'>
						<h2 className='tracking-tighter text-center font-extrabold text-base/6 xs:text-lg/6 sm:text-xl/7 md:text-2xl/7 lg:text-3xl/8 xl:text-4xl/8'>
							Socials:
						</h2>
						<div className='flex px-1 xs:px-2 sm:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 gap-1 xs:gap-2 sm:gap-3 sm:gap-4'>
							<InlineSocialLink
								text='Github'
								href={GITHUB}
								SocialIcon={GithubIcon}
								iconStyle='text-white'
							/>
							<span className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-stone-300/30 font-bold'>
								/
							</span>
							<InlineSocialLink
								text='LinkedIn'
								href={LINKEDIN}
								SocialIcon={LinkedInIcon}
								iconStyle='text-sky-500'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
