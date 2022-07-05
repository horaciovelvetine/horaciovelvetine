import { Summary } from '../components';

export default function Home() {
	return (
		<div
			className='bg-cover saturate-[1.25]'
			style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
			<div className='flex flex-col backdrop-blur-3xl bg-bg-primary-900/5 min-h-screen'>
				{/* ! Page Content Starts */}

				<Summary />
			</div>
		</div>
	);
}
