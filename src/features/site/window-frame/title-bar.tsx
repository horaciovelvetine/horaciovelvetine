import { CloseIcon } from '../../../assets';

interface TitleBarProps {
  title: string;
  id: string;
  closeWindowByID: (windowID: string) => void;
}

export function TitleBar({ title, id, closeWindowByID }: TitleBarProps) {
  const windowButtonStyle =
    'rounded-full transition-all duration-200 bg-zinc-500 group h-4 w-4 flex items-center justify-center';
  return (
    <div className='flex gap-1 bg-zinc-800/80 rounded-t-md py-1 px-2 items-center'>
      <div className='flex gap-1.5 justify-self-start'>
        <button
          type='button'
          className={windowButtonStyle + ' hover:bg-red-500'}
          onClick={() => { closeWindowByID(id) }}>
          <img
            src={CloseIcon}
            className='opacity-0 group-hover:opacity-100'
          />
        </button>
      </div>
      <div className='tracking-tighter text-center w-full font-extrabold text-nowrap select-none'>{title}</div>
    </div>
  );
}
