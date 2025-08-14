interface GradientLinkTextProps {
	text: string;
	url: string;
	classes: string;
}
export function GradientLinkText({
	text,
	url,
	classes,
}: GradientLinkTextProps) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noreferrer noopener'
			className={`inline-block text-transparent text-nowrap rounded-full bg-clip-text bg-gradient-to-r transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-clip-border ${classes}`}>
			{text}
		</a>
	);
}
