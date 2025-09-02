import { GradientLinkText, VideoHeadshot } from '../../../../components';
import { GITHUB } from '../../../../consts/urls';

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
		<div className='flex flex-col items-center font-extrabold'>
			<div className='flex flex-col items-center md:flex-row lg:justify-center'>
				<VideoHeadshot />

				<div>
					<div className='flex justify-center items-baseline'>
						<h1 className='tracking-tighter text-4xl sm:text-5xl'>
							👋{' '}I'm James
						</h1>
					</div>

					<GradientLinkText
						text='@horaciovelvetine'
						url={GITHUB}
						classes='text-[2.23rem]/8 xs:text-5xl/12 sm:text-7xl/14 from-rose-500 via-purple-500 to-sky-500 pb-2 px-2.5 tracking-tighter '
					/>
				</div>
			</div>

			<div className='flex justify-center items-center md:ml-42'>
				<p className='text-2xl/5 xs:text-3xl/6 sm:text-4xl/8 md:text-5xl/9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500 pb-1 md:pb-2.5 text-nowrap'>
					Full-Stack Engineer & <br /> Creative Technologist
				</p>
			</div>
		</div>
	);
}
