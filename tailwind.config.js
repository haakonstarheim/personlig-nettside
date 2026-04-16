/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			/* Designsystem — farger, fonter og spacing */
			colors: {
				// Profesjonell CV-palett: varm, myk, cream/brun
				brand: {
					50: '#fdf8f3',
					100: '#f5ebe0',
					200: '#edddcc',
					300: '#dbc5a8',
					400: '#c9a97e',
					500: '#b08d5e',
					600: '#97744a',
					700: '#7c5e3d',
					800: '#654c33',
					900: '#4a382a'
				},
				// Varm cream/beige bakgrunnsfarger
				warm: {
					50: '#fefcf9',
					100: '#fdf7f0',
					200: '#f9efe3',
					300: '#f3e4d1',
					800: '#3d3229',
					900: '#2a221b'
				},
				// DJ Dvask-palett: mørkere, mer energisk
				dvask: {
					50: '#fff0f6',
					100: '#ffdeeb',
					200: '#fcc2d7',
					300: '#faa2c1',
					400: '#f783ac',
					500: '#f06595',
					600: '#e64980',
					700: '#d6336c',
					800: '#c2255c',
					900: '#a61e4d'
				},
				neutral: {
					50: '#f8f9fa',
					100: '#f1f3f5',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#868e96',
					700: '#495057',
					800: '#343a40',
					900: '#212529'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			}
		}
	},
	plugins: []
};
