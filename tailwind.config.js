/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xxl: { max: '1435px' },
			xl: { max: '1200px' },
			lg: { max: '992px' },
			md: { max: '767px' },
			sm: { max: '639px' },
		},
	},
	plugins: [],
};
