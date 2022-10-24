import { useState } from "react";
import { WINDOW_DETAILS } from "../../interfaces";
import { DESKTOP_STATE } from "../../interfaces/DesktopState";
import { WindowWrapper } from "../app/WindowWrapper";


export const Finder = (props: DESKTOP_STATE) => {
  	const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
		const [isFocused, setIsFocused] = useState(false);
		const [isVisible, setIsVisible] = useState(false);

		const windowDetails: WINDOW_DETAILS = {
			id: 3,
			name: 'Finder',
			content: content,
			windowPosition,
			setWindowPosition,
			isFocused,
			setIsFocused,
			isVisible,
			setIsVisible,
		};

		return <WindowWrapper details={windowDetails} desktopState={props} />;
}

const content = (
<div className="relative flex flex-row h-96 w-96">
  This is going to be a finder window
</div>)
