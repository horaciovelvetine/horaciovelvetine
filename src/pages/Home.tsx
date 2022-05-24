import Draggable from 'react-draggable';
import HomeHeadshot from '../assets/video/HomeHeadshot.mp4';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export const Home = () => {
	const [aboutOpen, setAboutOpen] = useState(true);
	const [focus, setFocus] = useState('about');

	return (
		<div className='flex w-screen h-screen' id='home-root'>
			<div className='flex w-screen h-screen bg-cover' style={{ backgroundImage: `url('/HomePageGradient.png')` }}>
				<div className='flex w-screen h-screen backdrop-blur-3xl bg-bg-primary-900/25 saturate-[1.2]'>
					{/* ! Page Content Starts */}
					<Draggable>
						<div className='flex mx-auto my-auto h-content w-96 card backdrop-blur-sm bg-bg-primary-900/80 shadow-lg text-white '>
							<div className='flex flex-row h-50 w-full pt-1.5 pb-1'>
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
								<a href='https://flatironschool.com/courses/coding-bootcamp/' className='text-sm  text-ui-text/80 tracking-tighter hover:underline hover:underline-offset-0 hover:decoration-icon-fill '>
									Full-Stack Developer
								</a>
							</div>

							<div className='mx-auto text-center mb-4 text-sm'>
								I build modern and creative web applications that solve problems for clients and make happy users. 
							</div>

							<div className='flex mx-2 mb-4'>
								<p className='flex text-sm text-ui-text tracking-tighter font-light'>
									Find me on:
									<span className='translate-x-1 inline-flex items-center font-normal text-dodger-blue gap-1'>
										<a
											href='https://github.com/horaciovelvetine'
											className='inline-flex items-center mx-1 transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1'>
											Github
											<ChevronRightIcon className='h-4' />
										</a>

										<a
											href='https://www.linkedin.com/in/james-tillman-43a2828b'
											className='mx-1 inline-flex items-center  transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1'>
											LinkedIn
											<ChevronRightIcon className='h-4' />
										</a>
										<a
											href='https://horaciovelvetine.medium.com/'
											className='mx-1 inline-flex items-center transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1'>
											Medium
											<ChevronRightIcon className='h-4' />
										</a>
										<a
											href='https://discord.gg/CcdNdq3YbT'
											className='mx-1 inline-flex items-center transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1'>
											Discord
											<ChevronRightIcon className='h-4' />
										</a>
									</span>
								</p>
							</div>

							<div className='mx-2 text-start tracking-tighter'>
								<ul className='text-sm text-ui-text/80 leading-relaxed'>
									<li id='languages'>
										Languages:{' '}
										<span className='text-white tracking-normal pl-1'>Ruby, JavaScripty, TypeScript, HTML, CSS</span>
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
							<div className='w-content mx-auto mb-4 mt-2 transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1'>
								<button
									type='button'
									className='tracking-tight text-dodger-blue font-light inline-flex items-center leading-4'>
									Contact Me
									<ChevronRightIcon className='h-6' />
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
