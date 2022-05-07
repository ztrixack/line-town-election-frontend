import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
		alias: [
			{
				find: /@\//,
				replacement: path.join(__dirname, './src/'),
			},
		],
	},
});
