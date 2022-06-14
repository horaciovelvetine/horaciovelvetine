import { Summary } from '../components';

export default function Home() {
	return (
		<div className='flex w-screen h-screen' id='home-root'>
			<div className='flex max-w-screen max-h-screen bg-cover' style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
				<div className='flex w-screen h-screen backdrop-blur-3xl bg-bg-primary-900/25 saturate-[1.25]'>
					{/* ! Page Content Starts */}

					<Summary/>
				</div>
			</div>
		</div>
	);
};
