import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Netlify adapter for enkel deploy
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
