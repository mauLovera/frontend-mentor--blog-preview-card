/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/index.html"],
	theme: {
		colors: {
			yellow: "hsl(47, 88%, 63%)",
			white: "hsl(0, 0%, 100%)",
			grey: "hsl(0, 0%, 50%)",
			black: "hsl(0, 0%, 7%)",
		},
		dropShadow: {
			black: "8px 8px hsl(0, 0%, 0%)",
		},
	},
	plugins: [],
}
