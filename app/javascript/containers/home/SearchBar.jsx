import React from 'react';

export default function SearchBar() {
	// const [attr1, attr2] = destructuring()

	return (
		<>
			<header className='flex-shrink-0 relative h-16 bg-white flex items-center'>
				{/* Logo area */}
				<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
					<a
						href='/'
						className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'></a>
				</div>

				{/*//! Would be a good mobile dropdown to select context if needed */}
				{/* Picker area */}
				<div className='mx-auto md:hidden'>
					<div className='relative'>
						<label htmlFor='inbox-select' className='sr-only'>
							Choose context
						</label>
						<select
							id='inbox-select'
							className='rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600'
							defaultValue={sidebarNavigation.find((item) => item.current).name}>
							{sidebarNavigation.map((item) => (
								<option key={item.name}>{item.name}</option>
							))}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2'>
							<ChevronDownIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
						</div>
					</div>
				</div>

				{/* //! ALL MAIN SEARCH/NAV MENU RELATED BUTTONS*/}
				{/* //! MENU BUTTONS */}
				<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
					{/* //! Mobile main nav show hide button */}
					<button
						type='button'
						className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<MenuIcon className='block h-6 w-6' aria-hidden='true' />
					</button>
				</div>

				{/* //! DESKTOP TOP NAVIGATION SEARCH + ADD/SETTINGS */}
				<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
					<div className='min-w-0 flex-1'>
						<div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
							<label htmlFor='desktop-search' className='sr-only'>
								Search
							</label>
							<input
								id='desktop-search'
								type='search'
								placeholder='Search...'
								className='block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0'
							/>
							<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
								<SearchIcon className='h-5 w-5' aria-hidden='true' />
							</div>
						</div>
					</div>
					<div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
						<nav aria-label='Global' className='flex space-x-10'>
							<a href='#' className='text-sm font-medium text-gray-900'>
								+ Add Link
							</a>
							<a href='#' className='text-sm font-medium text-gray-900'>
								Settings
							</a>
						</nav>
					</div>
				</div>

				{/* //!MOBILE Drop down version of NAVBAR (search, add, settings), show/hide this `div` based on setMobileOpen state*/}
				<Transition.Root show={mobileMenuOpen} as={Fragment}>
					<Dialog as='div' className='fixed inset-0 z-40 md:hidden' onClose={setMobileMenuOpen}>
						<Transition.Child
							as={Fragment}
							enter='transition-opacity ease-linear duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-linear duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Dialog.Overlay className='hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75' />
						</Transition.Child>

						<Transition.Child
							as={Fragment}
							enter='transition ease-out duration-150 sm:ease-in-out sm:duration-300'
							enterFrom='transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
							enterTo='transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
							leave='transition ease-in duration-150 sm:ease-in-out sm:duration-300'
							leaveFrom='transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100'
							leaveTo='transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100'>
							<nav
								className='fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg'
								aria-label='Global'>
								<div className='h-16 flex items-center justify-between px-4 sm:px-6'>
									<a href='#'>
										<img
											className='block h-8 w-auto'
											src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
											alt='Workflow'
										/>
									</a>
									<button
										type='button'
										className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
										onClick={() => setMobileMenuOpen(false)}>
										<span className='sr-only'>Close main menu</span>
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									</button>
								</div>
								<div className='mt-2 max-w-8xl mx-auto px-4 sm:px-6'>
									<div className='relative text-gray-400 focus-within:text-gray-500'>
										<label htmlFor='mobile-search' className='sr-only'>
											Search...
										</label>
										<input
											id='mobile-search'
											type='search'
											placeholder='Search...'
											className='block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600'
										/>
										<div className='absolute inset-y-0 left-0 flex items-center justify-center pl-3'>
											<SearchIcon className='h-5 w-5' aria-hidden='true' />
										</div>
									</div>
								</div>
								<div className='max-w-8xl mx-auto py-3 px-2 sm:px-4'>
									{navigation.map((item) => (
										<Fragment key={item.name}>
											<a
												href={item.href}
												className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'>
												{item.name}
											</a>
											{item.children.map((child) => (
												<a
													key={child.name}
													href={child.href}
													className='block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100'>
													{child.name}
												</a>
											))}
										</Fragment>
									))}
								</div>
							</nav>
						</Transition.Child>
					</Dialog>
				</Transition.Root>
			</header>
		</>
	);
}
