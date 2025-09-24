import ReactMarkdown from "react-markdown";
import { Blockquote, CodeBlock, H1, H2, H3, H4, HR, LI, Link, OL, Paragraph, Table, TD, TH, UL } from "../styled-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export function BlogPostArticle({ markdownContent }: { markdownContent: string }) {
  return (
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
    </article>
  )
}