import { Link } from '@tanstack/react-router';

/**
 * PageNotFound component for displaying a 404 error page in mobile layouts.
 * Renders a centered card with a large "404!" heading, error message, and navigation link back to the home page.
 * Features responsive text sizing and hover animations for the home link.
 */
export function PageNotFound() {
	return (
		<div className='flex flex-col items-center bg-stone-900/70 rounded-xl ring-1 ring-stone-300/30 m-2 py-3 gap-0.5'>
			<h3 className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter font-extrabold'>
				404!
			</h3>
			<p className=' text-xl/5 xs:text-2xl/6 sm:text-3xl/7 md:text-4xl tracking-tight font-semibold'>
				Page Not Found!
			</p>
			<Link
				to='/'
				className='inline-block font-bold tracking-tighter text-blue-500  transition-all duration-100 hover:scale-105 hover:-translate-y-1 text-lg xs:text-xl sm:text-2xl md:text-3xl '>
				Home
			</Link>
		</div>
	);
}
