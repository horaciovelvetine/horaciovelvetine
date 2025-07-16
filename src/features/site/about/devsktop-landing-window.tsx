import { GithubLogo, LinkedInLogo } from '../../../assets';

export function DevsktopLandingWindow() {
	const textGradientSetupStyle =
		'bg-clip-text text-transparent bg-gradient-to-r ';
	const linkGradientStyle =
		'from-rose-500 via-purple-500 to-sky-500 hover:text-white hover:bg-clip-border hover:-translate-y-1 hover:scale-105 hover:drop-shadow-2xl transition-all duration-100 rounded-full text-nowrap ';
	const mainLinkStyle =
		textGradientSetupStyle + linkGradientStyle + 'px-2 pb-1 align-text-top';
	const siteLinkStyle =
		textGradientSetupStyle + linkGradientStyle + 'px-2 pb-1 text-center';

	return (
		<div className='relative'>
			<div className='flex items-center'>
				<div className='flex border border-white/40 bg-transparent rounded-full transition-all duration-200 drop-shadow-md hover:scale-105 hover:-translate-y-1 w-35 hover:drop-shadow-2xl tracking-tight'>
					<a
						href='https://support.apple.com/en-us/111115'
						target='_blank'
						rel='noreferrer noopener'>
						<video
							autoPlay
							loop
							muted
							className='rounded-full'>
							<source
								src='src/assets/img/home-headshot.mp4'
								type='video/mp4'
							/>
							<img src='src/assets/img/fallback-headshot.png' />
						</video>
					</a>
				</div>

				<div className='uppercase text-9xl font-extrabold tracking-tighter ps-0.5'>
					<h2>Hi!</h2>
				</div>

				<div className='text-6xl/12 tracking-tight font-bold'>
					<h2 className='pt-2'>Im James Tillman</h2>
					<a
						href='https://github.com/horaciovelvetine'
						target='blank'
						className='inline-flex items-center tracking-tighter'
						rel='noreferrer noopener'>
						<h2 className={mainLinkStyle}>
							<span className='text-5xl font-extrabold align-top'>@</span>
							horaciovelvetine
						</h2>
					</a>
				</div>
			</div>
			<div className='w-full border-t-2 mb-1.5'></div>
			<p className='text-3xl/7 font-bold text-white tracking-tight  mb-1.5'>
				<span
					className={textGradientSetupStyle + 'from-yellow-500 to-rose-500'}>
					Full-stack engineer
				</span>{' '}
				and creative-technologist driven by solving uniquely challenging
				problems and growing a{' '}
				<span
					className={
						textGradientSetupStyle +
						'from-rose-500 via-orange-500  to-yellow-500'
					}>
					love for technology
				</span>{' '}
				spanning back to jailbreaking the first iPhones.
			</p>
			<div className='flex w-full border-t-2 items-center pt-1.5'>
				<div className='flex gap-3 items-center text-4xl font-extrabold'>
					<h4 className={siteLinkStyle}>projects</h4>
					<span className='text-3xl font-bold tracking-tighter'>/</span>
					<h4 className={siteLinkStyle}>articles</h4>
					<span className='text-3xl font-bold tracking-tighter'>/</span>
					<h4 className={siteLinkStyle}>about</h4>
				</div>
				<div className='flex w-full items-center gap-3 justify-end-safe'>
					<a
						className='w-14 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-2xl transition-all duration-100'
						href='https://github.com/horaciovelvetine'
						target='_blank'
						rel='noreferrer noopener'>
						<img src={GithubLogo} />
					</a>
					<span className='text-3xl font-bold tracking-tighter'>/</span>
					<a
						className='w-14 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-2xl transition-all duration-100'
						href='https://www.linkedin.com/in/james-p-tillman/'
						target='_blank'
						rel='noreferrer noopener'>
						<img src={LinkedInLogo} />
					</a>
				</div>
			</div>
		</div>
	);
}
