import { AboutContent } from '../components';

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
              <AboutContent
                className=''
                showDocComment={true}
                textSize='text-sm'
                spacing='space-y-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
