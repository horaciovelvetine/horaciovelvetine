import { GithubIcon } from '../../../assets';
import {
	ESLintBadge,
	P5JSBadge,
	PostCSSBadge,
	ReactBadge,
	SimpleInlineLink,
	TailwindCSSBadge,
	TypescriptBadge,
	ViteBadge,
} from '../../../components';
import { GH_REPO, GITHUB } from '../../../consts/urls';

/**
 * A window component that displays information about the velvet.dev website
 * Shows the site title, GitHub link, technology stack, and description
 * Designed to be used within the desktop environment as a draggable window
 *
 * Features:
 * - Site branding and title
 * - Link to source code repository on GitHub
 * - Technology badges showing the tech stack used
 * - Description of the site's unique desktop-style interface
 *
 * @returns JSX.Element A styled window containing site information and details
 */
export function SiteInfoWindow() {
	return (
		<div className='flex h-full min-h-0 flex-col gap-5 p-4 sm:p-5'>
			<section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5'>
				<div className='flex flex-wrap items-start justify-between gap-4'>
					<div>
						<p className='text-xs font-semibold uppercase tracking-[0.3em] text-stone-400'>
							About This Site
						</p>
						<h2 className='mt-2 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl'>
							velvet.dev
						</h2>
						<p className='mt-3 max-w-3xl text-sm leading-7 text-stone-300 sm:text-base'>
							This portfolio is designed as a browser-native operating system
							surface: a draggable desktop on larger screens, an iOS-inspired
							navigation shell on smaller ones, and a set of demos that stay
							usable as their window bounds change.
						</p>
					</div>

					<a
						className='inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-stone-200 transition-transform duration-150 hover:-translate-y-0.5 hover:text-white'
						target='_blank'
						rel='noopener noreferrer'
						href={GH_REPO}>
						<GithubIcon
							size='size-6'
							ariaHidden={true}
							classes='text-white'
						/>
						Source Code
					</a>
				</div>
			</section>

			<section className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.9fr)]'>
				<div className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5'>
					<h3 className='text-xl font-semibold text-white'>Window Controls</h3>
					<ul className='mt-4 space-y-3 text-sm leading-6 text-stone-300'>
						<li className='flex gap-3'>
							<div className='mt-1 flex gap-1.5'>
								<span className='h-3 w-3 rounded-full bg-rose-500' />
								<span className='h-3 w-3 rounded-full bg-amber-400' />
								<span className='h-3 w-3 rounded-full bg-emerald-400' />
							</div>
							<span>Use the traffic lights to close, minimize, and zoom windows like a desktop OS.</span>
						</li>
						<li className='flex gap-3'>
							<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
							<span>Drag the title bar to reposition a window, then resize from any edge or corner.</span>
						</li>
						<li className='flex gap-3'>
							<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
							<span>New windows now look for open space instead of opening directly on top of one another.</span>
						</li>
						<li className='flex gap-3'>
							<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
							<span>The dock and menu bar stay context-aware based on the active window.</span>
						</li>
					</ul>
				</div>

				<div className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5'>
					<h3 className='text-xl font-semibold text-white'>Built With</h3>
					<ul className='mt-4 space-y-1'>
						<TypescriptBadge />
						<ReactBadge />
						<ViteBadge />
						<P5JSBadge />
						<TailwindCSSBadge />
						<PostCSSBadge />
						<ESLintBadge />
					</ul>
				</div>
			</section>

			<div className='flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4 text-sm text-stone-400'>
				<p>
					© 2020-{new Date().getFullYear()} J. Tillman
				</p>
				<div className='flex flex-wrap gap-4'>
					<SimpleInlineLink
						href={GITHUB}
						text='GitHub'
						showArrow
						classes='text-stone-300 hover:text-white'
					/>
					<SimpleInlineLink
						href={GH_REPO}
						text='Repository'
						showArrow
						classes='text-stone-300 hover:text-white'
					/>
				</div>
			</div>
		</div>
	);
}
