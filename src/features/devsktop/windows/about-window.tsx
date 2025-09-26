import { ABOUT_DATA } from '../../../consts/about-data';
import {
  CloseBracket,
  CodeClass,
  CodeComment,
  CodeKeyword,
  CodeLine,
  CodeParameter,
  CodePropertyLine,
  CodeSpace,
  CodeText,
  OpenBracket,
} from '../components/about';

export function AboutWindow() {
  return (
    <div
      className='flex flex-col pb-2 '
      style={{ maxHeight: 'calc(100vh - 72px)' }}>
      {/* Main Container with Scrollable Content */}
      <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
        <div className='font-mono shadow-2xl shadow-black/20 overflow-hidden flex flex-col h-full '>
          {/* Main Code Content */}
          <div className='flex-1 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
            <div className='p-4'>
              <div className='flex flex-col text-sm font-mono space-y-1'>
                {/* Multi-line doc comment */}
                <div className='mb-4 rounded-lg p-4 border-l-4 border-emerald-500/30 w-full'>
                  <CodeLine>
                    <CodeComment text='/**' />
                  </CodeLine>
                  <CodeLine>
                    <CodeComment text=' * Represents a James object - a full-stack developer entity with comprehensive technical capabilities and creative vision.' />
                  </CodeLine>
                  <CodeLine>
                    <CodeComment text=' * ' />
                  </CodeLine>
                  <CodeLine>
                    <CodeComment text=' * This class encapsulates the core attributes and behaviors of a modern software engineer, including technical skills, creative tools, and professional location data.' />
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

                {/* Class declaration */}
                <CodeLine>
                  <CodeKeyword text='class' />
                  <CodeSpace />
                  <CodeClass text='Developer' />
                  <CodeSpace />
                  <OpenBracket />
                </CodeLine>

                {/* Constructor */}
                <div className='my-2'>
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
          </div>
        </div>
      </div>
    </div>
  );
}
