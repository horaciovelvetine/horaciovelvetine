import { createFileRoute } from '@tanstack/react-router';

import { GithubLogo, LinkedInLogo, MailToIcon } from '../assets';
import { GradientLinkText, IconLink } from '../components';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col items-center my-4'>
      <div className='bg-stone-900/80 rounded-xl ring-1 ring-stone-300/30 py-3 px-2 max-w-fit drop-shadow-2xl'>
        <div className='flex gap-2 justify-center items-center h-7 xs:h-8 sm:h-9'>
          <h4 className='tracking-tighter text-center font-extrabold text-3xl xs:text-4xl sm:text-5xl'>
            Email Me:
          </h4>
          <a
            className='flex transition-all duration-100 hover:-translate-1 hover:scale-105 hover:drop-shadow-2xl'
            href='mailto:horaciovelvetine@gmail.com'
            target='_blank'
            rel='noreferrer noopener'>
            <MailToIcon size='w-10 sm:w-12 md:w-14' />
          </a>
        </div>
        <p className='text-center text-stone-300/50 border-b-2 border-stone-300/50 font-semibold pb-2 xs:text-lg sm:text-xl'>
          horaciovelvetine@gmail.com
        </p>
        <div className='flex justify-center items-center mt-2'>
          <h4 className='tracking-tighter text-center font-extrabold text-xl/7 xs:text-2xl sm:text-3xl mb-1.5'>
            Socials {''}
          </h4>
          <GradientLinkText
            text='@horaciovelvetine'
            url='https://github.com/horaciovelvetine'
            classes='text-2xl/7 xs:text-3xl sm:text-4xl from-rose-500 via-purple-500 to-sky-500 pb-1.75 tracking-tighter px-1.5 font-extrabold '
          />
        </div>

        <div className='flex justify-center gap-2 h-8 items-center'>
          <span className='text-stone-300/50 font-bold'>(or)</span>
          <IconLink
            iconSrc={GithubLogo}
            url='https://github.com/horaciovelvetine'
            size='w-8 sm:w-10 md:w-12'
          />
          <span className='text-xl xs:text-2xl sm:text-3xl font-extrabold tracking-tighter text-white/65 sm:px-1'>
            /
          </span>
          <IconLink
            iconSrc={LinkedInLogo}
            url='https://www.linkedin.com/in/james-p-tillman/'
            size='w-7 sm:w-9 md:w-11'
          />
        </div>
      </div>
    </div>
  );
}
