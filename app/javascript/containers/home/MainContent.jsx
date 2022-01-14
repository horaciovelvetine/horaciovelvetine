import React from 'react';
import TagCloud from './components/TagCloud';
import ResultsMain from './components/ResultsMain';

export default function MainContent(sidebarNavigation) {
	// const [attr1, attr2] = destructuring()

	{debugger}
	return (
		<>
			<div className='min-h-0 flex-1 flex overflow-hidden'>
				{/* //! SIDEBAR */}
				<nav aria-label='Sidebar' className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'>
					<div className='relative w-20 flex flex-col p-3 space-y-3'>
						{sidebarNavigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
									'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
								)}>
								<span className='sr-only'>{item.name}</span>
								<item.icon className='h-6 w-6' aria-hidden='true' />
							</a>
						))}
					</div>
				</nav>

				{/* //! MAIN CONTENT */}
				<main className='min-w-0 flex-1 border-t border-gray-200 lg:flex'>
					{/* //! Primary column */}
					<section
						aria-labelledby='primary-heading'
						className='min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first'>
						<h1 id='primary-heading' className='sr-only'>
							Home
						</h1>
						<ResultsMain />
					</section>

					{/* //! Secondary column (hidden on smaller screens) */}
					<aside className='hidden lg:block lg:flex-shrink-0'>
						<div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto'>
							<TagCloud />
						</div>
					</aside>
				</main>
			</div>
		</>
	);
}
