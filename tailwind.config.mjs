/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gold': '#DAA520',
				'dark-gold': '#B8860B',
			},
			backgroundColor: {
				'primary': '#FFFFFF',
				'secondary': '#F3F4F6',
			},
			textColor: {
				'primary': '#1F2937',
				'secondary': '#4B5563',
			}
		},
	},
	plugins: [],
}
