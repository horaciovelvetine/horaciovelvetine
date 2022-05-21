import Draggable from 'react-draggable'

export const Home = () => {
	return (
		<div className='flex w-screen h-screen' id='home-root'>
			<div className='w-screen h-screen bg-cover' style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
				<div className='flex w-screen h-screen backdrop-blur-3xl bg-bg-primary-900/25 saturate-[1.2]'>
					<Draggable>
						<div className='h-96 w-96 card backdrop-blur-sm bg-bg-primary-900/80 m-16 p-4 shadow-lg text-ui-text'>
							This is now maybe draggable
						</div>
					</Draggable>
				</div>
			</div>
		</div>
	);
};
