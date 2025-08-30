import { Link } from '@tanstack/react-router';
import { Route } from '../../routes/__root';
import { TailwindTextColors500 } from '../../functions';
import { SimpleInlineLink } from '../site/simple-inline-link';
import { ExclaimsTriangleIcon } from '../../assets';
import { GH_NEW_ISSUES } from '../../consts/urls';

/**
 * PageNotFound component for displaying a 404 error page in mobile layouts.
 * Renders a centered card with a large "404!" heading, error message, and navigation link back to the home page.
 * Features responsive text sizing and hover animations for the home link.
 */
export function PageNotFound() {
	const { siteSettings } = Route.useRouteContext();
	return (
		<main className='grid place-items-center py-24 sm:py-32 '>
			<div className='text-center bg-zinc-950/90 ring ring-stone-300/50 rounded-lg px-6 py-8 relative'>
				<ExclaimsTriangleIcon classes='absolute opacity-5 -translate-y-4 -rotate-12 pointer-events-none' />
				<p
					className={`text-base font-semibold ${TailwindTextColors500[siteSettings.accentColor]}`}>
					404
				</p>
				<h1 className='mt-4 text-5xl font-semibold tracking-tight text-balanc sm:text-7xl dark:text-white'>
					Page not found
				</h1>

				<p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400'>
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className='mt-10 flex flex-col items-center justify-center gap-x-6'>
					<Link
						to='/'
						className='inline-block font-bold tracking-tighter text-blue-500  transition-all duration-100 hover:scale-105 hover:-translate-y-1 text-lg xs:text-xl sm:text-2xl md:text-3xl '>
						Home
					</Link>
					<SimpleInlineLink
						text='Let me know!'
						href={GH_NEW_ISSUES}
						showArrow
					/>
				</div>
			</div>
		</main>
	);
}
