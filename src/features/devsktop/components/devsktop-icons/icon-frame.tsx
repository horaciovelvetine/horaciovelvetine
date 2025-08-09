/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type JSX } from 'react';
import type { IconProps, Position } from '../../../../types';
import Draggable from 'react-draggable';

interface IconFrameProps {
  Icon: ({ size }: IconProps) => JSX.Element;
  label: string;
  onClickAction: () => void;
  initialPosition: Position
}

export function IconFrame({ Icon, label, onClickAction, initialPosition }: IconFrameProps) {
  const iconRef = useRef<any>(null);

  return (
    <Draggable
      bounds='#devsktop-bounds'
      grid={[25, 25]}
      defaultPosition={initialPosition}
      nodeRef={iconRef}>
      <button
        ref={iconRef}
        type='button'
        className='absolute flex flex-col items-center'
        onDoubleClick={onClickAction}
        onTouchEnd={onClickAction}>
        <Icon size='size-18 lg:size-22' classes='drop-shadow-lg drop-shadow-stone-900/35' />
        <h4 className='tracking-tighter text-sm lg:text-base font-semibold'>
          {label}
        </h4>
      </button>
    </Draggable>
  );
}
