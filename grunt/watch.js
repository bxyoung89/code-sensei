module.exports = {

	gruntfile: {
		files: ['Gruntfile.js'],

		tasks: ["build"]
	},

	css: {
		files: [
			"<%= paths.cssSrc%>/**/*.scss",
			"<%= paths.appSrc%>/**/*.scss"
		],
		tasks: ["build-css"]
	}


};