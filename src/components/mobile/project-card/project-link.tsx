import { Link } from "@tanstack/react-router";

interface ProjectLinkProps {
	linkText: string;
	hrefLink?: string;
	pageLink?: string;
}

/**
 * ProjectLink component renders navigation links for project cards.
 * Supports both external links (href) and internal routing (pageLink) with consistent styling and hover effects.
 *
 * @param {string} props.linkText - The text to display for the link
 * @param {string} [props.hrefLink] - Optional external URL for navigation using anchor tag
 * @param {string} [props.pageLink] - Optional internal route for navigation using React Router Link
 * @returns JSX element containing either an external link or internal router link with hover animations
 */
export function ProjectLink({
	linkText,
	hrefLink,
	pageLink,
}: ProjectLinkProps) {
	return (
		<>
			{hrefLink && (
				<a
					href={hrefLink}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1 text-base xs:text-lg sm:text-xl font-semibold'>
					<span aria-hidden='true'>&rarr;</span> {linkText}
				</a>
			)}
			{pageLink && (
				<Link
					to={pageLink}
					className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1 text-base xs:text-lg sm:text-xl font-semibold'>
					{linkText}
				</Link>
			)}
		</>
	);
}
