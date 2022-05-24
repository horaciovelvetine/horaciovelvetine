import Draggable from 'react-draggable';
import HomeHeadshot from '../assets/video/HomeHeadshot.mp4';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export const Home = () => {
	const [aboutOpen, setAboutOpen] = useState(true)

	return (
		<div className='flex w-screen h-screen' id='home-root'>
			<div className='flex w-screen h-screen bg-cover' style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
				<div className='flex w-screen h-screen backdrop-blur-3xl bg-bg-primary-900/25 saturate-[1.2]'>
					{/* ! Page Content Starts */}
					<Draggable>
						<div className='flex mx-auto my-auto h-content w-96 card backdrop-blur-sm bg-bg-primary-900/80 shadow-lg text-white '>
							<div className='flex flex-row border-b border-icon-fill/10 h-50 w-full pt-1.5 pb-0.5'>
								<div className='mx-1.5 w-4 h-4 rounded-full bg-acc-gray'></div>
								<div className='flex w-4 h-4 rounded-full bg-goldenrod'></div>
								<div className='mx-1.5 w-4 h-4 rounded-full bg-limegreen'></div>
								<div className='text-center text-ui-text font-lighter text-sm translate-x-14 ml-1'>
									@horaciovelvetine
								</div>
							</div>
							<div className='flex my-2 mx-auto w-32 rounded-full border-2 border-acc-gray/20 drop-shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-1 ease-in-out hover:drop-shadow-2xl'>
								<video autoPlay loop muted className='rounded-full'>
									Your browser doesnt support the video tag
									<source src={HomeHeadshot} type='video/mp4'></source>
								</video>
							</div>
							<div className='py-4 mx-2 text-center'>
								<p className='text-lg font-semibold tracking-wide leading-none'>James Tillman</p>
								<p className='text-sm text-ui-text/80 tracking-tighter'>Full-Stack Developer</p>
							</div>

							<div className='mx-auto text-center pb-4'>
								<p className='text-sm'>
									I build modern and creative web-applications that solve problems for clients, and make happy users
								</p>
							</div>

							<div className='mx-2 text-start tracking-tighter'>
								<ul className='text-sm text-ui-text/80 leading-relaxed'>
									<li id='languages'>
										Languages:{' '}
										<span className='text-white tracking-normal'>Ruby, JavaScripty, TypeScript, HTML, CSS</span>
									</li>
									<li id='frameworks'>
										Frameworks: <span className='text-white tracking-normal'>Sinatra, Rails, React.js</span>
									</li>
									<li id='libraries'>Libraries:</li>
									<div className='my-1 mx-2'>
										<li id='libs-js' className='ml-2 leading-normal'>
											<span className='text-white tracking-normal'>
												+ Redux & Hooks, Jest, Cypress, React-Qery, TailwindCSS, BootStrap, Material UI, Headless UI{' '}
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
							<div className='w-content mx-auto mb-4 mt-2 transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1 hover:tracking-normal'>
								<button
									type='button'
									className='tracking-tight text-dodger-blue font-light inline-flex items-center leading-4'>
									Contact Me<ChevronRightIcon className='h-6'></ChevronRightIcon>
								</button>
							</div>

							<div className='my-2 mx-auto text-center text-ui-text text-xs tracking-tighter mb-2'>
								<p>© 2022 James Tillman. All Rights Reservered.</p>
							</div>
						</div>
					</Draggable>
				</div>
			</div>
		</div>
	);
};
