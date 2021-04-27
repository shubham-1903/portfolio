module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				"screen-1": "65vh",
				"screen-2": "90vh",
			},
		},
		rotate: {
			'360': '360deg'
		},

	},
	variants: {
		extend: {},
	},

	plugins: [],
};
