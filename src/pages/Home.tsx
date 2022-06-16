import { Summary } from '../components';

export default function Home() {
	return (
		<div
			className='flex flex-col bg-cover saturate-[1.25] min-h-screen'
			style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
			<div className='flex flex-col backdrop-blur-3xl bg-bg-primary-900/5 h-screen'>
				{/* ! Page Content Starts */}

				<Summary />
			</div>
		</div>
	);
}
