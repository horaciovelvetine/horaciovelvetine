import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import { PostLoading } from '../post-loading';
import { PostUnavailableError } from '../post-unavailable-error';
import type { BlogPost, SiteSettings } from '../../../../types';
import {
	CodeBlock,
	H1,
	H2,
	H3,
	H4,
	Paragraph,
	UL,
	OL,
	LI,
	Blockquote,
	TH,
	TD,
	HR,
	Link,
	Table,
} from '../styled-markdown';

interface WritingContentBodyProps {
	selectedPost: BlogPost | null;
	isLoading: boolean;
	siteSettings: SiteSettings;
	error: string | undefined;
	markdownContent: string;
}

/**
 * Content body component for the writing window that displays markdown content
 *
 * This component handles the main content area of the writing window, displaying
 * either a placeholder message when no post is selected, or rendering the selected
 * blog post content using ReactMarkdown with custom styling components.
 *
 * The component supports three main states:
 * - No post selected: Shows a centered placeholder with instructions
 * - Loading state: Shows a loading spinner while fetching post content
 * - Content display: Renders the markdown content with custom styled components
 *
 * @component
 * @param {WritingContentBodyProps} props - The component props
 * @param {BlogPost | null} props.selectedPost - The currently selected blog post, null if none selected
 * @param {boolean} props.isLoading - Whether the post content is currently being loaded
 * @param {SiteSettings} props.siteSettings - Site configuration including accent color for loading spinner
 * @param {string | undefined} props.error - Error message if post loading failed
 * @param {string} props.markdownContent - The raw markdown content to render
 */

export function WritingContentBody({
	selectedPost,
	isLoading,
	siteSettings,
	error,
	markdownContent,
}: WritingContentBodyProps) {
	return (
		<div className='flex-1 overflow-auto px-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
			{!selectedPost ?
				<div className='flex items-center justify-center h-full'>
					<div className='text-center'>
						<div className='text-6xl mb-4'>📝</div>
						<h2 className='text-2xl font-semibold text-white mb-2'>
							Select a note to view
						</h2>
						<p className='text-gray-400'>
							Choose a note from the sidebar to start reading
						</p>
					</div>
				</div>
			:	<div className='max-w-4xl my-2'>
					{isLoading ?
						<PostLoading
							loadingSlug={selectedPost.slug}
							accentColor={siteSettings.accentColor}
						/>
					: error ?
						<PostUnavailableError errorMessage={error} />
					:	<div className='prose prose-invert max-w-none'>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeHighlight, rehypeRaw]}
								components={{
									// Custom styling for code blocks
									code: ({ className, children, ...props }) => (
										<CodeBlock
											className={className}
											props={props}>
											{children}
										</CodeBlock>
									),
									// Custom styling for links
									a: ({ href, children, ...props }) => (
										<Link
											href={href}
											props={props}>
											{children}
										</Link>
									),
									// Custom styling for headings
									h1: ({ children, ...props }) => (
										<H1 props={props}>{children}</H1>
									),
									h2: ({ children, ...props }) => (
										<H2 props={props}>{children}</H2>
									),
									h3: ({ children, ...props }) => (
										<H3 props={props}>{children}</H3>
									),
									h4: ({ children, ...props }) => (
										<H4 props={props}>{children}</H4>
									),
									// Custom styling for paragraphs
									p: ({ children, ...props }) => (
										<Paragraph props={props}>{children}</Paragraph>
									),
									// Custom styling for lists
									ul: ({ children, ...props }) => (
										<UL props={props}>{children}</UL>
									),
									ol: ({ children, ...props }) => (
										<OL props={props}>{children}</OL>
									),
									li: ({ children, ...props }) => (
										<LI props={props}>{children}</LI>
									),
									// Custom styling for blockquotes
									blockquote: ({ children, ...props }) => (
										<Blockquote props={props}>{children}</Blockquote>
									),
									// Custom styling for tables
									table: ({ children, ...props }) => (
										<Table props={props}>{children}</Table>
									),
									th: ({ children, ...props }) => (
										<TH props={props}>{children}</TH>
									),
									td: ({ children, ...props }) => (
										<TD props={props}>{children}</TD>
									),
									// Custom styling for horizontal rules
									hr: ({ ...props }) => <HR props={props} />,
								}}>
								{markdownContent}
							</ReactMarkdown>
						</div>
					}
				</div>
			}
		</div>
	);
}
