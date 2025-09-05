import { createFileRoute } from '@tanstack/react-router';
import { GradientLinkText, SimpleInlineLink } from '../components';
import { GITHUB, MAILTO } from '../consts/urls';

export const Route = createFileRoute('/contact')({
	component: MobileContactPage,
});

/**
 * Mobile Contact Page Component
 *
 * A responsive contact page that provides multiple ways for users to get in touch.
 * Features a prominent email call-to-action with direct mailto link and GitHub profile link.
 * The page uses a centered card layout with glass morphism effects and responsive typography.
 *
 * Key features:
 * - Centered card layout with stone background and subtle borders
 * - Email contact section with inline mailto link
 * - GitHub profile link with gradient text styling
 * - Fully responsive design with mobile-first approach
 * - Consistent spacing and typography scaling across breakpoints
 *
 * The component follows the site's design system with stone/gray color palette,
 * rounded corners, and hover effects for interactive elements.
 *
 * @component
 */
function MobileContactPage() {
	return (
		<div className='flex flex-col items-center my-2 xs:my-3 sm:my-4 md:my-6 px-1'>
			<div className='bg-stone-900/80 rounded-xl ring-1 ring-stone-300/30 py-3 px-1 xs:px-2 sm:px-4 md:px-6 drop-shadow-2xl w-full max-w-2xl'>
				<div className='flex mx-auto items-center justify-center mb-2'>
					<h1 className='font-extrabold text-center tracking-tighter text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-1'>
						Contact:
					</h1>
				</div>
				<div className='flex flex-col px-1 items-center border-b-2 border-t-2 border-stone-300/30'>
					<p className='font-semibold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 text-center px-1'>
						The best way to get in touch is email:
						<br />
						<span className='text-white/60 font-medium'>
							(horaciovelvetine@gmail.com)
						</span>
						<SimpleInlineLink
							href={MAILTO}
							text='Send an Email'
							showArrow
						/>{' '}
					</p>
				</div>
				<div className='flex flex-col mx-auto mt-2 p-1 gap-1 xs:gap-2 items-center'>
					<h2 className='tracking-tighter text-center font-extrabold text-base/6 xs:text-lg/6 sm:text-xl/7 md:text-2xl/7 lg:text-3xl/8 xl:text-4xl/8'>
						Find me on Github:
					</h2>
					<GradientLinkText
						text='@horaciovelvetine'
						url={GITHUB}
						classes='text-lg/6 xs:text-xl/6 sm:text-2xl/7 md:text-3xl/7 lg:text-4xl/8 xl:text-5xl/8 from-rose-500 via-purple-500 to-sky-500 pb-1 xs:pb-1.5 sm:pb-2 tracking-tighter px-1 xs:px-1.5 sm:px-2 font-extrabold text-center'
					/>
				</div>
			</div>
		</div>
	);
}
