import { GithubIcon, LinkedInIcon } from '../../../../assets';
import { SimpleInlineLink, VideoHeadshot } from '../../../../components';
import { PROFILE_CONTENT } from '../../../../consts/site-content';
import { GITHUB, LINKEDIN } from '../../../../consts/urls';

/**
 * LandingPageContent Component
 *
 * Renders the main introduction section for the devsktop interface.
 *
 * Features:
 * - Personal greeting with name and handle
 * - Video headshot display
 * - Professional title and creative role with gradient-styled text
 * - Responsive layout: vertical stack on mobile, horizontal on larger screens
 * - Gradient text effects and interactive hover states for links and icons
 * - Prominent social links (GitHub, LinkedIn) with icons
 *
 * @component
 */
export function LandingPageContent() {
	return (
		<div className='p-4 sm:p-6'>
			<div className='grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] lg:items-start'>
				<div className='space-y-5'>
					<div className='space-y-3'>
						<p className='text-xs font-semibold uppercase tracking-[0.28em] text-stone-400'>
							James Tillman
						</p>
						<h1 className='max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl'>
							{PROFILE_CONTENT.title}
						</h1>
						<p className='max-w-3xl text-pretty text-base leading-7 text-stone-300 sm:text-lg'>
							{PROFILE_CONTENT.shortTagline}
						</p>
					</div>

					<div className='flex flex-wrap gap-2 text-sm text-stone-300'>
						<span className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5'>
							{PROFILE_CONTENT.location}
						</span>
						<span className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5'>
							Expected B.S. CS, Dec. 2026
						</span>
						<span className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5'>
							Azure Fundamentals (AZ-900)
						</span>
					</div>

					<div className='grid gap-3 sm:grid-cols-3'>
						{PROFILE_CONTENT.highlights.map(highlight => (
							<div
								key={highlight}
								className='rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-stone-300'>
								{highlight}
							</div>
						))}
					</div>

					<div className='flex flex-wrap items-center gap-4 border-t border-white/8 pt-4 text-sm font-medium'>
						<SimpleInlineLink
							href={GITHUB}
							text='GitHub'
							showArrow
							classes='text-stone-200 hover:text-white'
						/>
						<SimpleInlineLink
							href={LINKEDIN}
							text='LinkedIn'
							showArrow
							classes='text-stone-200 hover:text-white'
						/>
						<a
							href='mailto:james.p.tillman@gmail.com'
							className='text-stone-200 transition-transform duration-150 hover:-translate-y-0.5 hover:text-white'>
							Email
						</a>
					</div>
				</div>

				<div className='rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25'>
					<div className='flex flex-col items-center gap-4 text-center'>
						<VideoHeadshot />
						<div className='space-y-2'>
							<p className='text-sm font-semibold uppercase tracking-[0.22em] text-stone-400'>
								{PROFILE_CONTENT.handle}
							</p>
							<p className='text-sm leading-6 text-stone-300'>
								{PROFILE_CONTENT.intro}
							</p>
						</div>
						<div className='flex items-center gap-3 text-stone-300'>
							<GithubIcon classes='text-white/80' />
							<LinkedInIcon classes='text-sky-300' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
