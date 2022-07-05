import { ChevronRightIcon } from '@heroicons/react/solid';
import type { LinkGenInt } from '../../interfaces';

export const AppleLink = ({ text, url }: LinkGenInt) => {
	return (
		<a
			href={url}
			className='inline-flex items-center transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1 tracking-tight text-dodger-blue font-light'
			key={url}>
			{text}
			<ChevronRightIcon className='h-4' />
		</a>
	);
};
