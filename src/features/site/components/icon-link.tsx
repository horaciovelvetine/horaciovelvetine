interface IconLinkProps {
  url: string;
  iconSrc: string;
  size: string
}

/**
 * A component that renders a clickable icon that links to a URL
 * 
 * @param {string} props.url - The URL the icon links to
 * @param {string} props.iconSrc - The source URL of the icon image
 * @param {string} props.size - TailwindCSS class controlling the icon size
 */

export function IconLink({ size, url, iconSrc }: IconLinkProps) {
  return (
    <a
      className={`flex ${size} transition-all duration-100 hover:-translate-1 hover:scale-105 hover:drop-shadow-2xl`}
      href={url}
      target='_blank'
      rel='noreferrer noopener'>
      <img src={iconSrc} />
    </a>);
}
