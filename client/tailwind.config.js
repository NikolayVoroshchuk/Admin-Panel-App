/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#5F3DF7',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
		},
	},
	plugins: [
		require('tailwindcss-global-dark'),
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icon': {
					borderRadius: '50%',
					cursor: 'pointer',
					padding: '0.25rem',
					fontSize: '1.8rem',
					lineHeight: '2rem',
					transition: 'box-shadow .3s ease-in-out',
					boxShadow: '0 3px 6px rgba(45, 8, 125, 0.1)',
					backgroundColor: 'white',
					color: '#353538',
					'&:hover': {
						boxShadow: '0 4px 20px rgba(45, 8, 125, 0.35)',
					},
				},
			})
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			})
		}),
	],
}
