import homeHeadshotVideo from '../../assets/img/home-headshot.mp4';
import fallbackHeadshot from '../../assets/img/fallback-headshot.png';

/**
 * A component that displays a circular video headshot with a fallback image
 * Features subtle hover animations and a fallback image
 *
 * @returns JSX.Element A styled media element containing an autoplay video
 */
export function VideoHeadshot() {
	return (
		<div className='flex w-32 rounded-full border border-white/10 bg-white/[0.03] transition-transform duration-150 hover:-translate-y-0.5 hover:scale-[1.02] sm:w-36 md:w-40'>
			<video
				autoPlay
				loop
				muted
				playsInline
				className='rounded-full'>
				<source
					src={homeHeadshotVideo}
					type='video/mp4'
				/>
				<img
					src={fallbackHeadshot}
					alt='James Tillman headshot'
				/>
			</video>
		</div>
	);
}
