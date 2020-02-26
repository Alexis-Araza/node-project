module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	jshint: {
		all: ['Gruntfile.js', 'public/js/script.js']
	},


	watch: {
		scripts: {
			all: {
				files: ['Gruntfile.js', 'public/js/script.js'],
				tasks: ['jshint'],
				options: {
				  spawn: false,
				},
			},
		},
	},


	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
		  src: 'public/js/script.js',
		  dest: 'public/js/script.min.js'
		}
	},


});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');





  // Default task(s).
  grunt.registerTask('default', ['watch'], ['jshint']);
  grunt.registerTask('ugly',['uglify']);
  // 'default' checks everything, but can be renamed ie. default = test, [grunt] = [grunt test]

};