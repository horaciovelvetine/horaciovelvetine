import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from '@tanstack/react-router';
import { useState } from 'react';
import { CloseIcon, MenuBarsIcon, CodeBlockIcon } from '../assets';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Footer, PageNotFound } from '../components';
import type { SiteContext } from '../types';
import { SiteNavigation } from '../consts/site-navigation';

export const Route = createRootRouteWithContext<SiteContext>()({
	component: RootComponent,
	notFoundComponent: PageNotFound,
});

/**
 * Root Component for the velvet.dev Application
 *
 * The main root component that provides the layout structure for the entire application.
 * Features a responsive navigation header with mobile menu functionality, main content area,
 * and footer. Uses TanStack Router for routing and Headless UI for accessible mobile menu dialog.
 *
 * Features:
 * - Responsive navigation header with logo and mobile menu toggle
 * - Mobile-first hamburger menu with overlay dialog
 * - Site navigation links for all main pages
 * - Integration with TanStack Router for client-side routing
 * - Consistent layout structure across all pages
 * - Accessibility features including screen reader support
 *
 * The component manages mobile menu state and provides smooth transitions and hover effects
 * for enhanced user experience.
 *
 * @component
 */
function RootComponent() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
			<header className='bg-gray-900/95 backdrop-blur-sm text-tight text-white border-b border-gray-600/50'>
				<nav
					aria-label='Global'
					className={`flex items-center justify-between px-5 h-[2.5rem] md:h-[3.5rem]`}>
					<Link
						to='/'
						className='-m-1.5'
						onClick={() => {
							setMobileMenuOpen(false);
						}}>
						<span className='sr-only'>Velvet.dev</span>
						<CodeBlockIcon
							size='size-7'
							classes='text-gray-300 w-auto hover:scale-105 transition-all duration-100 hover:-translate-y-1'
						/>
					</Link>
					<div className='flex'>
						<button
							type='button'
							onClick={() => {
								setMobileMenuOpen(true);
							}}
							className='-m-2.5 inline-flex items-center justify-center rounded-md  hover:scale-105 transition-all duration-100 hover:-translate-y-1'>
							<span className='sr-only'>Open main menu</span>
							<MenuBarsIcon
								size='size-7'
								classes='text-gray-300 w-auto'
							/>
						</button>
					</div>
				</nav>

				{/* NAV MENU DIALOG POP-OVER */}
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}>
					<div className='fixed inset-0 z-50' />
					<DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-sm px-5 py-1.5 sm:max-w-sm border-l border-gray-600/50'>
						<div className='flex items-center justify-between text-white'>
							<Link
								to='/'
								className='-m-1.5'
								onClick={() => {
									setMobileMenuOpen(false);
								}}>
								<span className='sr-only'>Velvet.dev</span>
								<CodeBlockIcon
									size='size-7'
									classes='text-gray-300 w-auto hover:scale-105 transition-all duration-100 hover:-translate-y-1'
								/>
							</Link>
							<button
								type='button'
								onClick={() => {
									setMobileMenuOpen(false);
								}}
								className='-m-2.5 rounded-md p-2.5 text-gray-300'>
								<span className='sr-only'>Close menu</span>
								<CloseIcon
									size='size-7'
									classes='text-gray-300 w-auto hover:scale-105 transition-all duration-100 hover:-translate-y-1'
								/>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-600/30'>
								<div className='space-y-2 py-6 px-2 text-white text-right'>
									{SiteNavigation.map(item => (
										<Link
											key={item.title}
											to={item.href}
											onClick={() => {
												setMobileMenuOpen(false);
											}}
											className='-mx-3 block rounded-lg px-3 py-2 text-lg/7  xs:text-xl sm:text-2xl/8 font-semibold hover:bg-blue-500/60 transition-all duration-100 hover:-translate-y-1 hover:scale-105'>
											{item.title}
										</Link>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>

			{/* MAIN CONTENT */}
			<main
				className={`min-h-[calc(100vh-2.5rem)] md:min-h-[calc(100vh-3.5rem)] min-w-[320px] text-white`}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
