import React from 'react';

interface ImageProps {
  src?: string;
  alt?: string;
  title?: string;
  props?: React.ImgHTMLAttributes<HTMLImageElement>;
}

/**
 * Custom styled image component for markdown rendering
 * 
 * Provides consistent styling for images in blog posts with:
 * - Responsive sizing that fits within the prose container
 * - Rounded corners for a modern look
 * - Proper spacing and alignment
 * - Support for alt text and titles
 * 
 * @param {ImageProps} props - The component props
 * @param {string} props.src - The image source URL
 * @param {string} props.alt - Alternative text for accessibility
 * @param {string} props.title - Title attribute for the image
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props.props - Additional HTML img attributes
 */
export function Image({ src, alt, title, props: additionalProps }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className="w-full h-auto rounded-lg my-4 mx-auto block max-w-full"
      loading="lazy"
      {...additionalProps}
    />
  );
}
