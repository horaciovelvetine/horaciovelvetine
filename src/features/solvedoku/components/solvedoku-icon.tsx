interface SolvedokuIconProps {
  /** Optional class names to control the icon size. Defaults to "size-24" */
  iconSize?: string;
}

/**
 * Renders a stylized Sudoku grid icon with numbers 1-9
 * @param {SolvedokuIconProps} props - The component props
 * @param {string} [props.iconSize="size-24"] - TailwindCSS classes to control icon dimensions
 */
export function SolvedokuIcon({ iconSize = 'size-24' }: SolvedokuIconProps) {
  return (
    <div className={`${iconSize} cursor-default select-none rotate-4 translate-x-1`}>
      <div className='grid grid-cols-3 grid-rows-3 border-2 border-slate-500 h-full'>
        <div className='border border-slate-400 text-center bg-slate-100 flex items-center justify-center text-blue-600'>
          1
        </div>
        <div className='border border-slate-400 text-center bg-slate-200 flex items-center justify-center text-blue-600'>
          2
        </div>
        <div className='border border-slate-400 text-center bg-slate-100 flex items-center justify-center text-blue-600'>
          3
        </div>
        <div className='border border-slate-400 text-center bg-slate-200 flex items-center justify-center text-blue-600'>
          4
        </div>
        <div className='border border-slate-400 text-center bg-slate-100 flex items-center justify-center text-blue-600'>
          5
        </div>
        <div className='border border-slate-400 text-center bg-slate-200 flex items-center justify-center text-blue-600'>
          6
        </div>
        <div className='border border-slate-400 text-center bg-slate-100 flex items-center justify-center text-blue-600'>
          7
        </div>
        <div className='border border-slate-400 text-center bg-slate-200 flex items-center justify-center text-blue-600'>
          8
        </div>
        <div className='border border-slate-400 text-center bg-slate-100 flex items-center justify-center text-blue-600'>
          9
        </div>
      </div>
    </div>
  );
}
