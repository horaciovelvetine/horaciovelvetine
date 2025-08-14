/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ManagedWindow, SiteSettings } from "../../types";
import { CloseIcon } from "../../assets";

interface WindowMenuWrapperProps {
  siteSettings: SiteSettings;
  windowState: ManagedWindow;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  menuMainTitle: string;
  Content: (props: any) => ReactNode;
}

export function WindowMenuWrapper({ siteSettings, windowState, showMenu, setShowMenu, menuMainTitle, Content }: WindowMenuWrapperProps) {
  return (
    <div
      className={`absolute w-full -bottom-2 transition-transform duration-200 pb-2 ${showMenu ? '' : 'translate-y-300'}`}>
      <div className='flex flex-col rounded-lg bg-stone-900 px-2 pt-2 items-center gap-1'>
        <div
          className='flex w-full justify-end'
          onClick={() => {
            setShowMenu(false);
          }}>
          <CloseIcon size='size-6 xs:size-8 sm:size-10' />
        </div>

        {/* <SolvedokuIcon size='size-16 xs:size-20 sm:size-24 md:size-42 lg:size-48' /> */}

        <h3 className='font-semibold tracking-tighter xs:text-lg sm:text-2xl'>
          {menuMainTitle}
        </h3>
        {/* ADD MAIN CONTENT */}
        <Content
          setShowMenu={setShowMenu}
          windowState={windowState}
          siteSettings={siteSettings}
        />
      </div>
    </div>
  )
}




// import type { Dispatch, ReactNode, SetStateAction } from 'react';
// import type { SiteSettings, SolvedokuWindowState } from '../../../../types';
// import { CloseIcon } from '../../../../assets';
// import { SolvedokuIcon } from '../solvedoku-icon';

// interface MenuWrapperProps {
//   siteSettings: SiteSettings;
//   solvedokuState: SolvedokuWindowState;
//   showMenu: boolean;
//   setShowMenu: Dispatch<SetStateAction<boolean>>;
//   menuMainTitle: string;
//   Content: (props: any) => ReactNode;
// }

/**
 * A wrapper component that provides consistent styling and behavior for mobile menus
 * Contains a header with close button, Solvedoku icon, title and main content area
 * Slides up from bottom of screen when shown
 * @param {SiteSettings} props.siteSettings - Global site settings like theme colors
 * @param {SolvedokuWindowState} props.solvedokuState - Current game state and methods
 * @param {boolean} props.showMenu - Whether the menu is currently visible
 * @param {Dispatch<SetStateAction<boolean>>} props.setShowMenu - Function to control menu visibility
 * @param {string} props.menuMainTitle - Title text displayed in the menu header
 * @param {(props: any) => ReactNode} props.Content - Component to render in the main content area
 * @returns JSX element containing the menu wrapper
 */
// export function MenuWrapper({
//   siteSettings,
//   solvedokuState,
//   showMenu,
//   setShowMenu,
//   menuMainTitle,
//   Content,
// }: MenuWrapperProps) {
//   return (
//     <div
//       className={`absolute w-full -bottom-2 transition-transform duration-200 pb-2 ${showMenu ? '' : 'translate-y-300'}`}>
//       <div className='flex flex-col rounded-lg bg-stone-900 px-2 pt-2 items-center gap-1'>
//         <div
//           className='flex w-full justify-end'
//           onClick={() => {
//             setShowMenu(false);
//           }}>
//           <CloseIcon size='size-6 xs:size-8 sm:size-10' />
//         </div>
//         <SolvedokuIcon size='size-16 xs:size-20 sm:size-24 md:size-42 lg:size-48' />
//         <h3 className='font-semibold tracking-tighter xs:text-lg sm:text-2xl'>
//           {menuMainTitle}
//         </h3>
//         {/* ADD MAIN CONTENT */}
//         <Content
//           setShowMenu={setShowMenu}
//           solvedokuState={solvedokuState}
//           siteSettings={siteSettings}
//           setCurrentPuzzleDifficultyDisplay={
//             solvedokuState.setCurrentPuzzleDifficultyDisplay
//           }
//         />
//       </div>
//     </div>
//   );
// }
