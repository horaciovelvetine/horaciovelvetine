import { ChevronRightIcon } from '@heroicons/react/solid';

interface AppleLinkInt {
	url: string;
	styles: string;
}
const defaultStyling =
	'transition duration-300 ease-in-out decoration-dodger-blue hover:underline hover:decoration hover:decoration-dodger-blue hover:underline-offset-2 hover:scale-105 hover:-translate-y-1 tracking-tight text-dodger-blue font-light inline-flex items-center leading-4';

export const AppleLink = ({ url, styles }: AppleLinkInt) => {
	return (
		<a type='button' id={`apple-link-${url}`} href={url} key={url} className={`${defaultStyling} ${styles}`}>
			<ChevronRightIcon />
		</a>
	);
};
