module.exports = {

	options: {
		sourceMap: true,
		outputStyle: "nested"
	},
	all: {
		files: [
			{
				expand: true,
				cwd: "<%= paths.cssSrc%>",
				src: ["**/*.scss"],
				dest: "<%= paths.binCSS %>",
				ext: ".css"
			}
		]
	}
};