/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			/*
			 * Designsystem «Skarp»
			 * ====================
			 * To paletter: CV-siden (lys) og Dvask (mørk).
			 * Ingen avrundede hjørner og ingen skygger noe sted —
			 * flatene skilles med linjer og kontrast.
			 */
			colors: {
				// CV — lys
				paper: '#fafaf8',
				ink: '#121212',
				ink2: '#3d3d3a',
				muted: '#5c5c59',
				line: '#d9d9d5',
				accent: '#c2410c', // aksent som tekst på lys bakgrunn
				'accent-fill': '#e2561f', // aksent som flatefarge
				'accent-dark': '#f08a5d', // aksent på mørk bakgrunn
				'sidebar-muted': '#a3a3a0',
				'sidebar-dim': '#7a7a77',
				'sidebar-text': '#d4d4d1',

				// Dvask — mørk
				dvask: {
					bg: '#0e0e0e',
					text: '#f4f4f2',
					body: '#c9c9c5',
					muted: '#a3a3a0',
					dim: '#7a7a77',
					line: '#2a2a2a',
					accent: '#ff7a45'
				}
			},
			fontFamily: {
				sans: ['Schibsted Grotesk', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			borderRadius: {
				none: '0'
			}
		}
	},
	plugins: []
};
