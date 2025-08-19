import { GithubLogo, LinkedInLogo, MailToIcon } from '../../../assets';
import { GradientLinkText, IconLink, VideoHeadshot } from '../../../components';

/**
 * MainLandingWindow component that renders the primary landing page content for the devsktop interface
 *
 * This component serves as the main introduction page featuring:
 * - Personal introduction with name and handle
 * - Video headshot component
 * - Professional title and role description with gradient styling
 * - Social media and contact links (GitHub, LinkedIn, Email)
 * - Responsive layout that adapts to different screen sizes
 *
 * The layout adjusts from a vertical stack on mobile to a horizontal layout on larger screens,
 * with gradient text effects and interactive hover states for all links and icons.
 */
export function MainLandingWindow() {
	return (
		<div className='flex flex-col items-center font-extrabold'>
			<div className='flex flex-col items-center md:flex-row lg:justify-center'>
				<VideoHeadshot />

				<div>
					<div className='flex justify-center items-baseline'>
						<h1 className='tracking-tighter  text-4xl sm:text-5xl'>
							👋 I'm James
						</h1>
						<p className='ml-2 font-semibold text-white/65 text-2xl sm:text-3xl md:text-4xl'>
							a.k.a.
						</p>
					</div>

					<GradientLinkText
						text='@horaciovelvetine'
						url='https://github.com/horaciovelvetine'
						classes='text-[2.23rem]/8 xs:text-5xl/12 sm:text-7xl/14 from-rose-500 via-purple-500 to-sky-500 pb-2 px-2.5 tracking-tighter '
					/>
				</div>
			</div>

			<div className='flex flex-col xs:flex-row gap-1 items-center justify-center md:w-full md:justify-end md:mr-23'>
				<p className='text-2xl/5 xs:text-3xl/6 sm:text-4xl/8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500 pb-1 md:pb-2.5 text-nowrap'>
					Full-Stack Engineer & <br /> Creative Technologist
				</p>

				<div className='flex gap-3 xs:gap-1.5 sm:gap-2 items-center justify-center mb-2'>
					<IconLink
						iconSrc={GithubLogo}
						url='https://github.com/horaciovelvetine'
						size='w-8 sm:w-10 md:w-12'
					/>
					<span className='sm:text-xl md:text-2xl font-extrabold tracking-tighter text-white/65 sm:px-1'>
						/
					</span>
					<IconLink
						iconSrc={LinkedInLogo}
						url='https://www.linkedin.com/in/james-p-tillman/'
						size='w-7 sm:w-9 md:w-11'
					/>
					<span className='sm:text-xl md:text-2xl font-extrabold tracking-tighter text-white/65 sm:px-1'>
						/
					</span>
					<a
						className='flex transition-all duration-100 hover:-translate-1 hover:scale-105 hover:drop-shadow-2xl'
						href='mailto:horaciovelvetine@gmail.com'
						target='_blank'
						rel='noreferrer noopener'>
						<MailToIcon size='w-8 sm:w-10 md:w-12' />
					</a>
				</div>
			</div>
		</div>
	);
}
