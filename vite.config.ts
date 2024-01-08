import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/shared/components'),
		},
	},
	root: path.resolve(__dirname, '.'),
	build: {
		outDir: './dist',
	},
	server: {
		host: '127.0.0.1',
		port: 8080,
	},
	define: {
		_DEV_MODE_: JSON.stringify(true),
		_BASE_URL_: JSON.stringify('http://localhost:8000'),
		_PROJECT_: JSON.stringify('frontend'),
	},
});
