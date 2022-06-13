export const skillsSummary = () => {
  return (
		<div className='mx-2 text-start tracking-tighter'>
			<ul className='text-sm text-ui-text/80 leading-relaxed'>
				<li id='languages'>
					Languages: <span className='text-white tracking-normal pl-1'>Ruby, JavaScript, TypeScript, HTML, CSS</span>
				</li>
				<li id='frameworks'>
					Frameworks: <span className='text-white tracking-normal pl-1'>Sinatra, Rails, React.js</span>
				</li>
				<li id='libraries'>Libraries:</li>
				<div className='my-1 mx-2'>
					<li id='libs-js' className='ml-2 leading-normal'>
						<span className='text-white tracking-normal'>
							+ Redux & Hooks, Jest, Cypress, React-Query, TailwindCSS, BootStrap, Material UI, Headless UI{' '}
						</span>
					</li>
					<li id='libs-rb' className='ml-2 list-none my-2'>
						<span className='text-white tracking-normal'>
							+ Devise, OmniAuth, ActiveRecord, Minitest, Capybara, Nokogiri
						</span>
					</li>
				</div>
			</ul>
		</div>
	);
}