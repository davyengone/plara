'use strict';

module.exports = function(grunt){

	grunt.initConfig({
		jshint:{
			options:{
				esnext: true
			},
			files:['lib/*.js', 'test/*.js']
		},
		watch:{
			options:{

			},
			lib:{
				files:'lib/*.js',
				tasks: ['jshint', '6to5']
			},
			mocha:{
				files:'test/*.js',
				tasks: ['jshint', 'mochaTest']
			}
		},
		mochaTest:{
			options:{
				reporter: 'spec'
			},
			src: 'test/*.js'
		},
		"6to5":{
			options:{
				sourceMap: true
			},
			dist:{
				src: 'lib/*.js',
				dest: 'lib/dist/*.js'
			}
		},
		esnext: {
		    options: {
		      includeRuntime: true
		    },
		    dist: {
		      src: ['lib/*.js'],
		      dest: 'lib/dist/index.js' 
		    }
	  	}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-6to5');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-esnext');
}