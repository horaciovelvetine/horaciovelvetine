import { BootstrapIcon, FigmaIcon, IllustratorIcon, P5JSIcon, PhotoshopIcon, TailwindCSSIcon } from "../../../../assets"
import { ToolGridItem } from "./tool-grid-item"

export function VisualToolsGrid() { 
  const tools = [
    {
      title: 'Tailwind CSS',
      Icon: TailwindCSSIcon,
      hoverFill: 'group-hover:text-[#38bdf8]',
      href: 'https://tailwindcss.com/'
    },
    {
      title: 'Bootstrap',
      Icon: BootstrapIcon,
      hoverFill: 'group-hover:text-[#fff]',
      href: 'https://getbootstrap.com/'
    },
    {
      title: 'Photoshop',
      Icon: PhotoshopIcon,
      hoverFill: 'group-hover:text-[#001e36]',
      href: 'https://www.adobe.com/products/photoshop'
    },
    {
      title: 'Illustrator',
      Icon: IllustratorIcon,
      hoverFill: 'group-hover:text-[#330000]',
      href: 'https://www.adobe.com/products/illustrator'
    },
    {
      title: 'P5.js',
      Icon: P5JSIcon,
      hoverFill: 'group-hover:text-[#ed225d]',
      href: 'https://p5js.org/'
    },
    {
      title: 'Figma',
      Icon: FigmaIcon,
      hoverFill: 'group-hover:text-[#fff]',
      href: 'https://www.figma.com/'
    },
  ]
  return (
    <div className='my-1'>
      <h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl md:hidden'>
        Visuasls:
      </h3>
      <ul className='grid grid-cols-3 md:grid-cols-4 gap-1 xs:gap-2 xs'>
        <li className='hidden md:visible md:inline-flex border border-stone-300/30 rounded-lg width-24 relative overflow-hidden group hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 items-center bg-stone-300/75 '>
          <h3 className='font-extrabold font-stretch-semi-condensed text-center text-xl xs:text-2xl sm:font-stretch-105% tracking-tighter p-1 md:py-2 md:px-1.5 text-stone-800/75 '>
            Visuals
          </h3>
        </li>
        {tools.map(lang => (
          <ToolGridItem
            key={lang.title}
            {...lang}
          />
        ))}
        
      </ul>
    </div>
  )
}