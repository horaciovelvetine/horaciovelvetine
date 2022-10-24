import { WINDOW_COMPONENT_PROPS } from '../WindowWrapper';

const footerCSS = 'flex justify-center py-1 tracking-tight text-ui-text text-2xs bg-bg-primary-900 h-5';

export const FooterContainer = ({ details }: WINDOW_COMPONENT_PROPS) => {
	return (
		<div className={footerCSS}>
			{/* {Footer content option} */}
			{details.footerContent}
		</div>
	);
};
