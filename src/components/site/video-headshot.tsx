import homeHeadshotVideo from '../../assets/img/home-headshot.mp4';
import fallbackHeadshot from '../../assets/img/fallback-headshot.png';

/**
 * A component that displays a circular video headshot with a fallback image
 * Links to Apple support documentation when clicked
 * Features hover animations and styling
 *
 * @returns JSX.Element A styled anchor tag containing an autoplay video element
 */
export function VideoHeadshot() {
	return (
		<a
			href='https://support.apple.com/en-us/111115'
			target='_blank'
			rel='noreferrer noopener'
			className='flex border border-stone-300/20 rounded-full drop-shadow-2xl drop-shadow-stone-300/10 transition-all duration-100 hover:scale-105 hover:-translate-y-1 w-32 sm:w-36 md:w-40'>
			<video
				autoPlay
				loop
				muted
				className='rounded-full'>
				<source
					src={homeHeadshotVideo}
					type='video/mp4'
				/>
				<img src={fallbackHeadshot} />
			</video>
		</a>
	);
}
