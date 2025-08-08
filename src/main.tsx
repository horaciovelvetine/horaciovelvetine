import './assets/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteMain } from './app/site-main';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
	<StrictMode>
		<SiteMain />
	</StrictMode>
);
