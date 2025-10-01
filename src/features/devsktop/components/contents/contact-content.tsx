import { CONTACT_DATA } from '../../../../consts/contact-data';
import { CloseBracket, OpenBracket } from '../code-components/brackets';
import { CodeKeyword } from '../code-components/code-keyword';
import { CodeLine } from '../code-components/code-line';
import { CodeProperty } from '../code-components/code-property';
import { CodePropertyLine } from '../code-components/code-property-line';
import { CodeSpace } from '../code-components/code-space';
import { CodeText } from '../code-components/code-text';

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
    <div className={`font-mono ${className}`}>
      <div className='flex flex-col text-xs sm:text-sm md:text-base font-mono space-y-1 sm:space-y-1.5 md:space-y-2'>
        {/* Object declaration */}
        <CodeLine>
          <CodeKeyword text='const' />
          <CodeSpace />
          <CodeProperty text='ContactInfo' />
          <CodeSpace />
          <CodeText text='= ' />
          <OpenBracket />
        </CodeLine>

        {/* Properties */}
        {Object.entries(CONTACT_DATA).map(([key, value]) => (
          <CodePropertyLine
            key={key}
            property={key}
            value={value}
          />
        ))}

        {/* Close object */}
        <CodeLine>
          <CloseBracket />
        </CodeLine>
      </div>

      {/* Additional info section */}
      {showAdditionalInfo && (
        <div className='mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700/50'>
          <div className='text-xs md:text-sm text-gray-400 space-y-1'>
            <p className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>Click on email, GitHub, or LinkedIn to open</span>
            </p>
            <p className='flex items-center gap-2'>
              <span className='text-yellow-400'>ℹ</span>
              <span className='flex gap-1'>
                Preferred contact method:
                <a
                  href='mailto:horaciovelvetine@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span className='text-blue-400 font-semibold'>
                    email
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
