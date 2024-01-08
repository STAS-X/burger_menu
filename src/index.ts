import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/error';
import App from '@/app/App';
import '@/app/styles/index.scss';

import { StoreProvider } from '@/app/providers/StoreProvider';
import RouterUtils from '@/shared/lib/hooks/useRouterUtils';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Контейнер не найден. Не удалось вмонтировать приложение!');
}

const root = createRoot(container);

root.render(
	<BrowserRouter>
		<RouterUtils>
			<StoreProvider>
				<ThemeProvider>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</ThemeProvider>
			</StoreProvider>
		</RouterUtils>
	</BrowserRouter>
);
