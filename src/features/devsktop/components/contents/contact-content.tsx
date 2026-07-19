import { CONTACT_DATA } from '../../../../consts/contact-data';
import { PROFILE_CONTENT } from '../../../../consts/site-content';
import { MAILTO } from '../../../../consts/urls';
import { SimpleInlineLink } from '../../../../components';

interface ContactContentProps {
  className?: string;
  showAdditionalInfo?: boolean;
}

/**
 * Contact Content Component
 *
 * A reusable component that renders contact information in a code editor theme.
 * This component can be used in both mobile and desktop contexts with different
 * wrapper styling applied by the parent components.
 *
 * Features:
 * - Code editor themed interface with syntax highlighting
 * - Contact information displayed as JavaScript object properties
 * - Clickable links for email, GitHub, and LinkedIn
 * - Optional additional info section
 * - Customizable styling through className prop
 *
 * @component
 */
export function ContactContent({
  className = '',
  showAdditionalInfo = true
}: ContactContentProps) {
  return (
    <div className={className}>
      <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)]'>
        <section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.3em] text-stone-400'>
            Contact
          </p>
          <h3 className='mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl'>
            Let&apos;s build something memorable.
          </h3>
          <p className='mt-3 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base'>
            {PROFILE_CONTENT.availability} The fastest way to reach me is by
            email, especially for engineering roles, product conversations, and
            creative technical collaborations.
          </p>

          <div className='mt-6 grid gap-3 sm:grid-cols-2'>
            <a
              href={MAILTO}
              className='rounded-[22px] border border-white/10 bg-white/[0.03] p-4 transition-transform duration-150 hover:-translate-y-0.5 hover:border-white/20'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-stone-500'>
                Email
              </p>
              <p className='mt-2 text-sm text-white sm:text-base'>
                {CONTACT_DATA.email}
              </p>
            </a>

            <div className='rounded-[22px] border border-white/10 bg-white/[0.03] p-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-stone-500'>
                Preferred
              </p>
              <p className='mt-2 text-sm text-white sm:text-base'>
                {CONTACT_DATA.preferredMethod}
              </p>
            </div>

            <div className='rounded-[22px] border border-white/10 bg-white/[0.03] p-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-stone-500'>
                GitHub
              </p>
              <div className='mt-2 text-sm sm:text-base'>
                <SimpleInlineLink
                  href={CONTACT_DATA.github}
                  text='github.com/horaciovelvetine'
                  showArrow
                  classes='text-stone-300 hover:text-white'
                />
              </div>
            </div>

            <div className='rounded-[22px] border border-white/10 bg-white/[0.03] p-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-stone-500'>
                LinkedIn
              </p>
              <div className='mt-2 text-sm sm:text-base'>
                <SimpleInlineLink
                  href={CONTACT_DATA.linkedin}
                  text='linkedin.com/in/james-p-tillman'
                  showArrow
                  classes='text-stone-300 hover:text-white'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
          <h3 className='text-xl font-semibold text-white'>What I&apos;m looking for</h3>
          <ul className='mt-4 space-y-3 text-sm leading-6 text-stone-300'>
            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
              <span>Software engineering work that values product judgment and implementation craft.</span>
            </li>
            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
              <span>Teams building interactive products, internal tools, visual systems, or technically unusual experiences.</span>
            </li>
            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500' />
              <span>Projects where frontend polish and deeper engineering constraints both matter.</span>
            </li>
          </ul>
        </section>
      </div>

      {showAdditionalInfo && (
        <div className='mt-4 border-t border-white/8 pt-4 text-xs text-stone-400 md:text-sm'>
          <div className='flex flex-wrap items-center gap-3'>
            <span>{CONTACT_DATA.availability}</span>
            <span aria-hidden='true'>•</span>
            <a
              href={MAILTO}
              className='font-medium text-stone-300 transition-transform duration-150 hover:-translate-y-0.5 hover:text-white'>
              {CONTACT_DATA.email}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
