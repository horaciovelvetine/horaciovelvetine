import { ChevronRightIcon } from "@heroicons/react/solid";
import { SocialLink } from "../../interfaces";

export const socialLink = ({ text, url }: SocialLink) => {
	return (
		<a href={url} className='mx-1 inline-flex items-center' key={url}>
			{text}
			<ChevronRightIcon className='h-4' />
		</a>
	);
};
