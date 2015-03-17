module.exports = {
	all: {
		expand: true,
		cwd: '<%= paths.binCSS %>/',
		src: ['*.css', '!*.min.css', '**/*.css'],
		dest: '<%= paths.binCSS %>/',
		ext: '.min.css'
	}
};