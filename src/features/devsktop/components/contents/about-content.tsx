import { ABOUT_DATA } from '../../../../consts/about-data';
import { CloseBracket, OpenBracket } from '../code-components/brackets';
import { CodeClass } from '../code-components/code-class';
import { CodeComment } from '../code-components/code-comment';
import { CodeKeyword } from '../code-components/code-keyword';
import { CodeLine } from '../code-components/code-line';
import { CodeParameter } from '../code-components/code-parameter';
import { CodePropertyLine } from '../code-components/code-property-line';
import { CodeSpace } from '../code-components/code-space';
import { CodeText } from '../code-components/code-text';

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
    <div className={`font-mono ${className}`}>
      <div className={`flex flex-col ${textSize} font-mono ${spacing}`}>
        {/* Multi-line doc comment */}
        {showDocComment && (
          <div className='mb-4 rounded-lg p-2 sm:p-4 border-l-4 border-emerald-500/30 w-full'>
            <div className='break-words'>
              <CodeLine>
                <CodeComment text='/**' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * Represents a James object - a full-stack developer entity with comprehensive technical capabilities and creative vision.' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * This class encapsulates the core attributes and behaviors of a modern software engineer, including technical' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * skills, creative tools, and professional location data.' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * ' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * @constructor Creates a new Developer instance with essential coding fuel, debugging capabilities, and a passion for innovation' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * ' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * @param {string} dietCoke - Essential fuel for coding, and creative problem-solving' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * ' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * @returns {Developer} A fully initialized developer instance ready for action, problem-solving, innovation, and building amazing experiences' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * ' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' * @since 2020 - Continuously evolving with new technologies, frameworks, development methodologies, and industry best practices' />
              </CodeLine>
              <CodeLine>
                <CodeComment text=' */' />
              </CodeLine>
            </div>
          </div>
        )}

        {/* Class declaration */}
        <CodeLine>
          <CodeKeyword text='class' />
          <CodeSpace />
          <CodeClass text='Developer' />
          <CodeSpace />
          <OpenBracket />
        </CodeLine>

        {/* Constructor */}
        <div>
          <CodeLine indent={1}>
            <CodeKeyword text='constructor' />
            <CodeText text='(' />
            <CodeParameter text='dietCoke' />
            <CodeText text=') ' />
            <OpenBracket />
          </CodeLine>

          {/* Properties */}
          {Object.entries(ABOUT_DATA).map(([key, value]) => (
            <CodePropertyLine
              key={key}
              property={key}
              value={value}
            />
          ))}

          {/* Close constructor */}
          <CodeLine indent={1}>
            <CloseBracket />
          </CodeLine>
        </div>

        {/* Close class */}
        <CodeLine>
          <CloseBracket />
        </CodeLine>
      </div>
    </div>
  );
}

