import { AboutContent } from '../components';

export function AboutWindow() {
  return (
    <div className='flex h-full min-h-0 flex-col'>
      <div className='flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-400/80 [&::-webkit-scrollbar-thumb]:bg-stone-600/70 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent'>
        <div className='p-4 sm:p-5'>
          <AboutContent
            showDocComment={true}
            textSize='text-sm'
            spacing='space-y-5'
          />
        </div>
      </div>
    </div>
  );
}
