import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from '@tanstack/react-router';
import type { LayoutProps } from '../types';
import { useState } from 'react';
import { CloseIcon, MenuBarsIcon, CodeBlockIcon } from '../assets';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Footer, PageNotFound } from '../components';

export const Route = createRootRouteWithContext<LayoutProps>()({
	component: RootComponent,
	notFoundComponent: PageNotFound
});

const siteNavigation = [{ name: 'Home', href: '/' }, { name: 'Solvedoku', href: '/solvedoku' }, { name: 'Rock, Paper, Scissors', href: 'rock-paper-scissors' }, { name: 'Contact', href: '/contact' }];

function RootComponent() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className='bg-stone-900/95 font-sans text-tight text-white'>
				<nav
					aria-label='Global'
					className='flex items-center justify-between px-5 h-[2.5rem]'>
					<Link
						to='/'
						className='-m-1.5'
						onClick={() => {
							setMobileMenuOpen(false);
						}}>
						<span className='sr-only'>Velvet.dev</span>
						<CodeBlockIcon
							size='size-7'
							classes='text-stone-300 w-auto hover:scale-105 transition-all duration-100 hover:-translate-y-1'
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
									classes='text-stone-300 w-auto hover:scale-105 transition-all duration-100 hover:-translate-y-1'
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
									classes='text-stone-300 w-auto hover:scale-105 transition-all duration-100 hover:-translate-y-1'
								/>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-stone-300/10'>
								<div className='space-y-2 py-6 px-2 text-white text-right'>
									{siteNavigation.map(item => (
										<Link
											key={item.name}
											to={item.href}
											onClick={() => {
												setMobileMenuOpen(false);
											}}
											className='-mx-3 block rounded-lg px-3 py-2 text-lg/7  xs:text-xl sm:text-2xl/8 font-semibold hover:bg-blue-500/60 transition-all duration-100 hover:-translate-y-1 hover:scale-105'>
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
			<main className='min-h-[calc(100vh-2.5rem)] font-sans min-w-[320px] text-white'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
