import { useState } from 'react';
import Draggable from 'react-draggable';
import { Summary } from '../components';

export default function Home() {
	return (
		<div className='bg-cover saturate-[1.25]' style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
			<div className='min-h-screen min-w-screen backdrop-blur-3xl bg-bg-primary-900/5'>
				{/* ! Page Content Starts */}
				<div className='w-screen h-screen' id='homepage-desktop-contain'>
					<Summary />
				</div>
			</div>
		</div>
	);
}
