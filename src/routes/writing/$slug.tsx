import {
  createFileRoute,
  useLoaderData,
  Link as SiteLink,
} from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { getBlogPost } from '../../consts/blog-posts';
import {
  PostLoading,
  PostUnavailableError,
  CodeBlock,
  Link,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  UL,
  OL,
  LI,
  Blockquote,
  Table,
  TH,
  TD,
  HR,
} from '../../features';
import { useBlogPostDetails } from '../../hooks/writing';

export const Route = createFileRoute('/writing/$slug')({
  component: MobileBlogPostPage,
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) {
      throw new Error('Post not found');
    }
    return { post };
  },
});

/**
 * MobileBlogPostPage Component
 *
 * A comprehensive blog post display component that renders markdown content with syntax highlighting,
 * custom styling, and responsive design. This component handles the complete blog post viewing experience
 * including loading states, error handling, and rich markdown rendering.
 *
 * Features:
 * - Fetches and displays blog post content from a content source via useBlogPostDetails hook
 * - Renders markdown with syntax highlighting using rehype-highlight
 * - Supports GitHub Flavored Markdown (GFM) via remark-gfm
 * - Supports raw HTML rendering via rehype-raw
 * - Custom styled components for headings, code blocks, links, tables, lists, blockquotes, etc.
 * - Responsive design optimized for mobile and desktop viewing
 * - Navigation back to writing index page
 * - Loading and error state handling
 * - Publication date display in header
 * - Prose styling with inverted colors for dark theme
 *
 * @component
 */

function MobileBlogPostPage() {
  const { post } = useLoaderData({ from: '/writing/$slug' });
  const { siteSettings } = Route.useRouteContext();
  const { markdownContent, isLoading, error } = useBlogPostDetails(post);

  if (isLoading) {
    return (
      <PostLoading
        accentColor={siteSettings.accentColor}
        loadingSlug={post.slug}
      />
    );
  }

  if (error) {
    return <PostUnavailableError errorMessage={error} />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-600/50 shadow-2xl shadow-black/20 overflow-hidden'>
          {/* Header */}
          <div className='bg-gray-800/80 border-b border-gray-600/50 px-4 py-3 flex items-center space-x-2'>
            <div className='text-gray-400 text-lg sm:text-xl leading-relaxed ml-4'>{post.slug}.md</div>
          </div>

          {/* Main content */}
          <div className='p-4 sm:p-6 lg:p-8 xl:p-10'>
            <div className='flex flex-col text-sm sm:text-base md:text-lg space-y-1 sm:space-y-2 overflow-auto'>
              {/* Navigation */}
              <div className='mb-4'>
                <SiteLink
                  to='/writing'
                  className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors border-b'>
                  ← Back to Writing
                </SiteLink>
              </div>

              {/* Post Header */}
              <header className='mb-8'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
                  {post.title}
                </h1>
                <div className='flex items-center flex-wrap gap-3 text-sm text-gray-400'>
                  <span className='border-b'>Published: {post.publishedDate}</span>
                </div>
              </header>

              {/* Post Content - Markdown rendering */}
              <article className='prose prose-invert prose-lg max-w-none'>
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
                    h1: ({ children, ...props }) => <H1 props={props}>{children}</H1>,
                    h2: ({ children, ...props }) => <H2 props={props}>{children}</H2>,
                    h3: ({ children, ...props }) => <H3 props={props}>{children}</H3>,
                    h4: ({ children, ...props }) => <H4 props={props}>{children}</H4>,
                    // Custom styling for paragraphs
                    p: ({ children, ...props }) => (
                      <Paragraph props={props}>{children}</Paragraph>
                    ),
                    // Custom styling for lists
                    ul: ({ children, ...props }) => <UL props={props}>{children}</UL>,
                    ol: ({ children, ...props }) => <OL props={props}>{children}</OL>,
                    li: ({ children, ...props }) => <LI props={props}>{children}</LI>,
                    // Custom styling for blockquotes
                    blockquote: ({ children, ...props }) => (
                      <Blockquote props={props}>{children}</Blockquote>
                    ),
                    // Custom styling for tables
                    table: ({ children, ...props }) => (
                      <Table props={props}>{children}</Table>
                    ),
                    th: ({ children, ...props }) => <TH props={props}>{children}</TH>,
                    td: ({ children, ...props }) => <TD props={props}>{children}</TD>,
                    // Custom styling for horizontal rules
                    hr: ({ ...props }) => <HR props={props} />,
                  }}>
                  {markdownContent}
                </ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
