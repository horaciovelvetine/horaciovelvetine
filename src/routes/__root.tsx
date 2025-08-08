import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from '@tanstack/react-router';
import type { LayoutProps } from '../types';
import { useState } from 'react';
import { CloseIcon, MenuBarsIcon, CodeBlockIcon } from '../assets';
import { Dialog, DialogPanel } from '@headlessui/react';

export const Route = createRootRouteWithContext<LayoutProps>()({
	component: RootComponent,
	notFoundComponent: () => <p>Page Not Found!</p>,
});

const siteNavigation = [{ name: 'Solvedoku', href: '/solvedoku' }];

function RootComponent() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className='bg-stone-900/95 font-sans text-tight'>
				<nav
					aria-label='Global'
					className='flex items-center justify-between px-5 lg:px-8 h-[2.5rem]'>
					<Link
						to='/'
						className='-m-1.5'
						onClick={() => {
							setMobileMenuOpen(false);
						}}>
						<span className='sr-only'>Velvet.dev</span>
						<CodeBlockIcon
							size='size-7'
							classes='text-stone-300 w-auto'
						/>
					</Link>
					<div className='flex lg:hidden'>
						<button
							type='button'
							onClick={() => {
								setMobileMenuOpen(true);
							}}
							className='-m-2.5 inline-flex items-center justify-center rounded-md'>
							<span className='sr-only'>Open main menu</span>
							<MenuBarsIcon
								size='size-7'
								classes='text-stone-300 w-auto'
							/>
						</button>
					</div>
				</nav>

				{/* NAV MENU DIALOG POP-OVER */}
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}>
					<div className='fixed inset-0 z-50' />
					<DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 px-5 py-1.5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
						<div className='flex items-center justify-between'>
							<Link
								to='/'
								className='-m-1.5'
								onClick={() => {
									setMobileMenuOpen(false);
								}}>
								<span className='sr-only'>Velvet.dev</span>
								<CodeBlockIcon
									size='size-7'
									classes='text-stone-300 w-auto'
								/>
							</Link>
							<button
								type='button'
								onClick={() => {
									setMobileMenuOpen(false);
								}}
								className='-m-2.5 rounded-md p-2.5 text-gray-700'>
								<span className='sr-only'>Close menu</span>
								<CloseIcon
									size='size-7'
									classes='text-stone-300 w-auto'
								/>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-stone-300/10'>
								<div className='space-y-2 py-6'>
									{siteNavigation.map(item => (
										<Link
											key={item.name}
											to={item.href}
											onClick={() => {
												setMobileMenuOpen(false);
											}}
											className='-mx-3 block text-white rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50'>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>

			{/* MAIN CONTENT */}
			<main className='min-h-[calc(100vh-2.5rem)] font-sans min-w-[320px]'>
				<Outlet />
			</main>
		</>
	);
}
