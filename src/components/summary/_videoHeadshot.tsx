export const videoHeadshot = () => {
	return (
		<div className='flex my-2 mx-auto w-32 rounded-full border-2 border-acc-gray/20 drop-shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-1 ease-in-out hover:drop-shadow-2xl'>
			<video autoPlay loop muted className='rounded-full'>
				Your browser doesnt support the video tag
				<source src='/HomeHeadshot.mp4' type='video/mp4'></source>
			</video>
		</div>
	);
};
