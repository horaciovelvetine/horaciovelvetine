import { Link } from '@tanstack/react-router';
import { SimpleInlineLink } from '../../devsktop/components';
import type { IconProps } from '../../../types';
import type { JSX } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnailSrc?: string; // url to picture...
  ThumbnailIcon?: ({ size }: IconProps) => JSX.Element
  linkText?: string;
  linkURL?: string;
  pageLinkRoute?: string;
  pageLinkText?: string;
}

export function ProjectCard({
  title,
  description,
  thumbnailSrc,
  ThumbnailIcon,
  linkText,
  linkURL,
  pageLinkRoute,
  pageLinkText,
}: ProjectCardProps) {
  return (
    <div className='overflow-hidden'>
      <div className='relative isolate'>
        <div className='mx-auto max-w-7xl sm:px-6 '>
          <div className='mx-auto flex flex-col gap-2 bg-stone-300/10 px-6 py-4 ring-1 ring-white/10 rounded-xl sm:p-8'>
            {thumbnailSrc &&
              <img
                alt=''
                src={thumbnailSrc}
                className='h-auto w-full flex-none rounded-lg object-cover shadow-xl hover:shadow-2xl shadow-stone-300/5 hover:shadow-stone-300/15 transition-all duration-200 '
              />
            }
            <div className='flex w-full justify-center'>
              {ThumbnailIcon && <ThumbnailIcon size={'size-48 xs:size-64 sm:size-72'} />}
            </div>
            <div className='w-full flex-auto'>
              <h2 className='text-2xl font-bold tracking-tighter text-pretty text-white xs:text-3xl sm:text-4xl'>
                {title}
              </h2>
              <p className='text-lg/6 text-pretty text-stone-300 tracking-tight'>
                {description}
              </p>
              <ul
                role='list'
                className='grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-200 sm:grid-cols-2'>
                {/* {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-gray-200" />
                    {benefit}
                  </li>
                ))} */}
              </ul>
              <div className='flex'>
                {linkURL && linkText && (
                  <SimpleInlineLink
                    url={linkURL}
                    text={linkText}
                    showArrow
                  />
                )}
                {pageLinkRoute && (
                  <Link
                    to={pageLinkRoute}
                    className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'>
                    <span aria-hidden='true'>&rarr;</span>
                    {pageLinkText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className='aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-30'
          />
        </div>
      </div>
    </div>
  );
}
