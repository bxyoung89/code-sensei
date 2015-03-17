module.exports = {
	options: {
		map: true
	},
	all: {
		expand: true,
		flatten: true,
		src: [
			"<%= paths.binCSS %>/*.css"
		],
		dest: "<%= paths.binCSS %>/",
		options: {
			map: {
				prev: "<%= paths.binCSS %>"
			}
		}
	}
};