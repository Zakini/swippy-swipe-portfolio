module.exports = (grunt) => {
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'assets\\main.css': 'src\\sass\\main.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['sass']);
};
