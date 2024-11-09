/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				meteor: 'meteor 5s linear infinite',
				rainbow: 'rainbow var(--speed, 2s) infinite linear',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
			},
			keyframes: {
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				},
				rainbow: {
					'0%': {
						'background-position': '0%'
					},
					'100%': {
						'background-position': '200%'
					}
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				}
			},
},
	},
	plugins: [],
}
