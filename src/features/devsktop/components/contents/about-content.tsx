import { PROFILE_CONTENT } from '../../../../consts/site-content';
import { MAILTO } from '../../../../consts/urls';
import { SimpleInlineLink } from '../../../../components';

interface AboutContentProps {
  className?: string;
  showDocComment?: boolean;
  textSize?: string;
  spacing?: string;
}

/**
 * About Content Component
 *
 * A reusable component that renders about information in a code editor theme.
 * This component can be used in both mobile and desktop contexts with different
 * wrapper styling applied by the parent components.
 *
 * Features:
 * - Code editor themed interface with syntax highlighting
 * - About information displayed as JavaScript class structure
 * - Multi-line documentation comment
 * - Constructor with properties
 * - Customizable styling through props
 *
 * @component
 */
export function AboutContent({
  className = '',
  showDocComment = true,
  textSize = 'text-sm',
  spacing = 'space-y-1'
}: AboutContentProps) {
  return (
    <div className={className}>
      <div className={`flex flex-col ${spacing}`}>
        {showDocComment && (
          <section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-stone-400'>
              Profile
            </p>
            <h2 className='mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl'>
              {PROFILE_CONTENT.title}
            </h2>
            <p className='mt-3 max-w-3xl text-pretty text-sm leading-7 text-stone-300 sm:text-base'>
              {PROFILE_CONTENT.intro}
            </p>
            <div className='mt-4 flex flex-wrap gap-2 text-sm text-stone-300'>
              <span className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5'>
                {PROFILE_CONTENT.location}
              </span>
              <span className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5'>
                {PROFILE_CONTENT.availability}
              </span>
            </div>
          </section>
        )}

        <div className='grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
          <section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
            <div className='flex items-center justify-between gap-3'>
              <h3 className='text-xl font-semibold text-white'>Experience</h3>
              <a
                href={MAILTO}
                className='text-sm font-medium text-stone-300 transition-transform duration-150 hover:-translate-y-0.5 hover:text-white'>
                Contact
              </a>
            </div>
            <div className='mt-4 space-y-5'>
              {PROFILE_CONTENT.experience.map(entry => (
                <article
                  key={`${entry.company}-${entry.role}`}
                  className='border-t border-white/8 pt-4 first:border-t-0 first:pt-0'>
                  <div className='flex flex-wrap items-baseline justify-between gap-2'>
                    <div>
                      <h4 className='text-base font-semibold text-white'>
                        {entry.role}
                      </h4>
                      <p className='text-sm text-stone-400'>{entry.company}</p>
                    </div>
                    <p className='text-xs font-medium uppercase tracking-[0.18em] text-stone-500'>
                      {entry.dates}
                    </p>
                  </div>
                  <ul className='mt-3 space-y-2 text-sm leading-6 text-stone-300'>
                    {entry.bullets.map(bullet => (
                      <li key={bullet} className='flex gap-2'>
                        <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className='flex flex-col gap-5'>
            <section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
              <h3 className='text-xl font-semibold text-white'>Education</h3>
              <div className='mt-4 space-y-4'>
                {PROFILE_CONTENT.education.map(entry => (
                  <article
                    key={`${entry.school}-${entry.degree}`}
                    className='rounded-2xl border border-white/8 bg-white/[0.03] p-4'>
                    <p className='text-sm font-semibold text-white'>{entry.school}</p>
                    <p className='mt-1 text-sm text-stone-300'>{entry.degree}</p>
                    <p className='mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-500'>
                      {entry.dates}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
              <div className='flex items-center justify-between gap-3'>
                <h3 className='text-xl font-semibold text-white'>Skills</h3>
                <div className='flex flex-wrap gap-3 text-sm'>
                  <SimpleInlineLink
                    href={PROFILE_CONTENT.contact.github}
                    text='GitHub'
                    showArrow
                    classes='text-stone-300 hover:text-white'
                  />
                  <SimpleInlineLink
                    href={PROFILE_CONTENT.contact.linkedin}
                    text='LinkedIn'
                    showArrow
                    classes='text-stone-300 hover:text-white'
                  />
                </div>
              </div>
              <div className='mt-4 space-y-4'>
                {PROFILE_CONTENT.skillGroups.map(group => (
                  <div key={group.label}>
                    <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500'>
                      {group.label}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {group.items.map(item => (
                        <span
                          key={item}
                          className={`rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 ${textSize} text-stone-200`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

