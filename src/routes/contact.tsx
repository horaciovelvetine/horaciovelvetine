import { createFileRoute } from '@tanstack/react-router';

import { GithubLogo, LinkedInLogo, MailToIcon } from '../assets';
import { GradientLinkText, IconLink, SimpleInlineLink } from '../components';
import { GH_REPO, LINKEDIN, MAILTO } from '../consts/urls';

export const Route = createFileRoute('/contact')({
	component: MobileContactPage,
});

function MobileContactPage() {
	return (
		<div className='flex flex-col items-center my-2'>
			<div className='bg-stone-900/80 rounded-xl ring-1 ring-stone-300/30 py-3 px-2 drop-shadow-2xl mx-0.5 sm:mx-3 sm:py-6'>
				<div className='flex mx-auto items-center justify-center mb-2'>
					<h1 className='font-extrabold text-center tracking-tighter text-3xl xs:text-4xl sm:text-5xl'>
						Contact Me:
					</h1>
					<span className='ml-4 flex items-center text-nowrap text-3xl xs:text-4xl sm:text-5xl text-white/50'>
						(
						<MailToIcon
							size='size-10'
							classes='text-white mt-2'
						/>
						)
					</span>
				</div>
				<div className='flex flex-col px-2 xs:w-3/4 mx-auto items-center rounded-lg border-2 border-stone-300/50 hover:bg-zinc-900/35 transition-all duration-300 hover:shadow-xl hover:shadow-stone-300/10'>
					<p className='font-semibold text-lg/tight xs:text-xl sm:text-2xl md:text-3xl pt-2 text-center xs:w-3/4'>
						The easiest way to get in touch is simply to{' '}
						<SimpleInlineLink
							url={MAILTO}
							text='email me here'
							showArrow
						/>
					</p>
					<p className='my-2 pb-1 xs:pb-2 text-center text-lg/tight xs:text-xl sm:text-2xl md:text-3xl leading-5 text-white/65 xs:w-5/6'>
						I'm always open to work, or question about work, especially if you
						have a uniquely challenging problem!
					</p>
				</div>
				<div className='flex flex-col sm:flex-row sm:gap-1 sm:mx-6'>
					<div className='flex mx-auto mt-2 p-1 gap-1 border-2 rounded-lg border-stone-300/50 hover:bg-zinc-900/35 transition-all duration-300 hover:shadow-xl hover:shadow-stone-300/10'>
						<span className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-stone-300/30'>
							(
						</span>
						<div>
							<h2 className='tracking-tighter text-center font-extrabold text-xl/7 xs:text-2xl sm:text-3xl'>
								Find me on Github:
							</h2>
							<GradientLinkText
								text='@horaciovelvetine'
								url={GH_REPO}
								classes='text-2xl/7 xs:text-3xl sm:text-4xl from-rose-500 via-purple-500 to-sky-500 pb-1.75 tracking-tighter px-1.5 font-extrabold '
							/>
						</div>
						<span className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-stone-300/30'>
							)
						</span>
					</div>
					<div className='flex mx-auto items-center justify-center gap-2 border-2 border-stone-300/50 rounded-lg mt-2 px-10 xs:px-16 sm:px-2 hover:bg-zinc-900/35 transition-all duration-300 hover:shadow-xl hover:shadow-stone-300/10'>
						<h2 className='tracking-tighter text-center font-extrabold text-xl/7 xs:text-2xl sm:text-3xl'>
							Socials:
						</h2>
						<div className='flex px-2 py-1 gap-2'>
							<IconLink
								iconSrc={GithubLogo}
								url={GH_REPO}
								size='w-8 sm:w-10 md:w-12'
							/>
							<span className='text-lg text-stone-300/30 font-bold'>/</span>
							<IconLink
								iconSrc={LinkedInLogo}
								url={LINKEDIN}
								size='w-7 sm:w-9 md:w-11'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
