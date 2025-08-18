import { SimpleInlineLink } from '../site/simple-inline-link';

/**
 * Footer component for mobile layouts that displays copyright information and a link to the project repository.
 */
export function Footer() {
	return (
		<footer className='flex flex-col items-center min-w-screen bg-stone-900/95 py-0.5'>
			<p className='font-bold tracking-tight text-white/50 text-base/6 xs:text-lg sm:text-xl'>
				© 2020-{new Date().getFullYear()} -{' '}
				<span className='font-normal tracking-tighter'>
					J.Tillman /@horaciovelvetine
				</span>
			</p>
			<p className='font-semibold tracking-tight text-base/6 xs:text-lg sm:text-xl'>
				<SimpleInlineLink
					url='https://github.com/horaciovelvetine/horaciovelvetine'
					text='Repo on Github'
					showArrow
				/>
			</p>
		</footer>
	);
}
