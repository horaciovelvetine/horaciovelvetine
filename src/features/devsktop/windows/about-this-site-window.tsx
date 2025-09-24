import { CloseIcon, GithubIcon } from '../../../assets';
import {
	ESLintBadge,
	GradientLinkText,
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
export function AboutThisSiteWindow() {
	return (
		<div className='block py-3'>
			<div className='flex pb-2'>
				<div className='flex flex-col h-full'>
					<h2 className='text-nowrap font-extrabold tracking-tighter text-6xl leading-10'>
						velvet.dev
					</h2>

					<div className='flex items-center justify-center mt-2 text-white/50'>
						<p className='text-2xl tracking-tighter font-extrabold px-1'>
							source code on:{' '}
						</p>
						<a
							className='inline-flex gap-1 text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'
							target='_blank'
							rel='noopener noreferrer'
							href={GH_REPO}>
							<GithubIcon
								size='size-12'
								ariaHidden={true}
								classes='text-white'
							/>
						</a>{' '}
					</div>
					<div>
						<h5 className='leading-4.5 font-bold text-white/50  text-center mx-20'>
							Built With:{' '}
						</h5>
						<ul className='my-1'>
							<TypescriptBadge />
							<ReactBadge />
							<ViteBadge />
							<P5JSBadge />
							<TailwindCSSBadge />
							<PostCSSBadge />
							<ESLintBadge />
						</ul>
					</div>
				</div>

				<p className='text-2xl/7.5 font-bold tracking-tighter pl-3 text-pretty flex flex-col justify-center'>
					<span className='border-b border-stone-300/50'>
						is the page for engineer
						<GradientLinkText
							text='@horaciovelvetine'
							url={GITHUB}
							classes='from-rose-500 via-purple-500 to-sky-500 font-extrabold px-1'
						/>
					</span>
					While typically websites consist of pages seperated neatly by URLs,
					here pages are draggable windows which can be positioned, opened, and
					closed just like on a desktop. Give it a try - drag me around.
				</p>
			</div>

			<div className='tracking-tighter mx-7'>
				<div className='flex w-full justify-center gap-1'>
					<h3 className='font-extrabold text-5xl border-white/50 pb-1.5 text-nowrap border-b-2  text-end bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500'>
						Navigate like a desktop:
					</h3>
				</div>
				<ul className='font-semibold text-2xl list-disc'>
					<li>
						Move windows around by clicking and dragging the bar at the top.
					</li>
					<li>
						Use the{' '}
						<span className='inline-block align-center'>
							<CloseIcon
								size='size-4.5'
								classes='rounded-full bg-red-500 text-stone-800'
							/>
						</span>{' '}
						button at the top left of a window to close it.
					</li>
					<li>Click on icons to open pages, applications, and view content.</li>
					<li>
						Additional functions can be found in the dropdown menus at the top
						of the screen. The menus are based on the currently active window.
					</li>
				</ul>
			</div>
			<div className='flex flex-col min-w-full items-center border-t border-stone-300/30'>
				<p className='font-bold tracking-tight text-white/50 sm:text-xl/7'>
					© 2020-{new Date().getFullYear()} -{' '}
					<span className='font-normal tracking-tighter'>
						J. Tillman{' '}
						<SimpleInlineLink
							href={GITHUB}
							text='@horaciovelvetine'
						/>
					</span>
				</p>
				<p className='font-semibold tracking-tight text-xl/5'>
					<SimpleInlineLink
						href={GH_REPO}
						text='Find on Github'
						showArrow
					/>
				</p>
			</div>
		</div>
	);
}
