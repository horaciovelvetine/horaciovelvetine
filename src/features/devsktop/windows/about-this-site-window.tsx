import { CloseIcon, GithubLogo } from '../../../assets';
import { IconLink, ToolBadge, GradientLinkText } from '../components';

export function AboutThisSiteWindow() {
  return (
    <div>
      <div className='flex pb-2'>
        <div className='flex flex-col h-full'>
          <h2 className='text-nowrap font-extrabold tracking-tighter text-6xl leading-10'>
            velvet.dev
          </h2>

          <div className='flex items-center justify-center mt-2 text-white/50'>
            <p className='text-2xl tracking-tighter font-extrabold px-1'>
              source code on:{' '}
            </p>
            <IconLink
              iconSrc={GithubLogo}
              url='https://github.com/horaciovelvetine/horaciovelvetine'
              size='w-12'
            />{' '}
          </div>
          <div>
            <h5 className='leading-4.5 font-bold text-white/50  text-center mx-20'>
              Built With:{' '}
            </h5>
            <ul className='my-1'>
              <ToolBadge
                text='Typescript'
                color='blue'
                url='https://www.typescriptlang.org/'
              />
              <ToolBadge
                text='React'
                color='cyan'
                url='https://react.dev/'
              />
              <ToolBadge
                text='Vite'
                color='purple'
                url='https://vite.dev/'
              />
              <ToolBadge
                text='P5.js'
                color='pink'
                url='https://p5js.org/'
              />
              <ToolBadge
                text='Tailwind CSS'
                color='emerald'
                url='https://tailwindcss.com/'
              />
              <ToolBadge
                text='Post CSS'
                color='orange'
                url='https://postcss.org/'
              />
              <ToolBadge
                text='ESLint'
                color='yellow'
                url='https://eslint.org/'
              />
            </ul>
          </div>
        </div>

        <p className='text-3xl font-bold tracking-tighter pl-3 leading-7.5'>
          Is the page for engineer
          <GradientLinkText
            text='@horaciovelvetine'
            url='https://github.com/horaciovelvetine'
            classes='from-rose-500 via-purple-500 to-sky-500 font-extrabold pl-1'
          />
          . While typically websites consist of pages seperated neatly by URL's
          here pages are draggable windows which can be positioned, opened, and
          closed.
        </p>
      </div>

      <div className='tracking-tighter my-2 mx-7'>
        <div className='flex w-full justify-center gap-1'>
          <h3 className='font-extrabold text-5xl border-white/50 pb-1.5 text-nowrap border-b-2  text-end bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500'>
            Navigate like a desktop:
          </h3>
        </div>
        <ul className='font-semibold text-2xl list-disc'>
          <li>
            Move windows around by clicking and dragging the bar at the top.
          </li>
          <li>
            Use the{' '}
            <span className='inline-block'>
              <img
                className='rounded-full bg-red-500 p-0.5'
                src={CloseIcon}
              />
            </span>{' '}
            button at the top left of a window to close it.
          </li>
          <li>Click on icons to open pages, applications, and view content.</li>
          <li>Additional functions can be found in the dropdown menu's at the top of the screen, and depend on the currently active window.</li>
        </ul>
      </div>
      <p className='text-center text-white/50 font-bold text-lg tracking-tighter'>
        ©2025 All Rights Reserved - @horaciovelvetine
      </p>
    </div>
  );
}
