import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '@/app/App';
import './index.scss';
import { ThemeProvider } from './app/providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
