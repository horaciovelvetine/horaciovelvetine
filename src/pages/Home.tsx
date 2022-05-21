export const Home = () => {
	return (
		<div className='flex w-screen h-screen' id='home-root'>
			<div className='w-screen h-screen bg-cover ' style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
				<div className='w-screen h-screen backdrop-blur-3xl backdrop-contrast-[1.05] bg-bg-primary-800/90'>
					<p className='text-white'>Some more content</p>
				</div>
			</div>
		</div>
	);
};
