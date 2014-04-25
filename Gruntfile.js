module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		modernizr: {
			dist: {
				"devFile" : "bower_components/modernizr/modernizr.js",
	      		"outputFile" : "js/thirdparty/modernizr.custom.js",

	      // 		extra: {
			    //     shiv: false,
			    //     printshiv: true,
			    //     load: true,
			    //     mq: true,
			    //     cssclasses: true
			    // },
			    "uglify" : false,
		        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
		        // You can override this by defining a "files" array below.
		        "files" : {
		            "src": ['sass/*/**.scss', 'js/*.js']
		        },
			}
			   	
	    },
		compass: {
			all: {
				config: 'config.rb'
			}
		},
		connect: {
			options: {
				middleware: function (connect) {
					return [
					connect.static('_site'),
					connect.directory('_site')
					];
				}
			},
			server: {
				options: {
					port: 4000,
					hostname: '*'
				}
			}
		},
		copy: {
	      	css: {
		        files: [
		          { expand: true, cwd: 'css/', src: '*', dest: '_site/css', filter: 'isFile' }
		        ]
	     	},
		    js: {
		    	files: [
		          { expand: true, cwd: 'js/', src: '**', dest: '_site/js' }
		        ]

		    },
		    jsplugins: {
		    	files: [
		    	  { expand: true, cwd: 'bower_components/jquery/dist/', src:'jquery.min.js', dest: 'js/thirdparty'},
		    	  { expand: true, cwd: 'bower_components/scrollReveal.js/', src:'scrollReveal.js', dest: 'js/thirdparty'}
		        ]

		    },
	      	img: {
	        	files: [
	          	{ expand: true, cwd: 'images/', src: '*', dest: '_site/images', filter: 'isFile' }
	        	]
	      	}
	     //  	fonts: {
	     //    	files: [
	     //      	{ expand: true, cwd: 'fonts/', src: '*', dest: '_site/fonts', filter: 'isFile' }
	     //    	]
	     //  	}
	    },
		exec: {
			build: {
				cmd: 'jekyll build'
			}
		},
		watch: {
			jekyll: {
				files: ['**/*.html', '**/*.md', '!README.md', '!_site/**/*'],
				tasks: ['exec:build'],
				options: {
					livereload: true
				}
			},
			scss: {
				files: ['sass/**/*.scss'],
				tasks: ['modernizr','compass', 'copy:css','copy:js'],
				options: {
					livereload: true
				}
			},
			javascript: {
				files: ['js/*.js'],
				tasks: ['modernizr','copy:js'],
				options: {
					livereload: true
				}
			},
			images: {
				files: ['images/*.png'],
				tasks: ['copy:img'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['connect', 'compass','modernizr', 'exec:build', 'copy:jsplugins', 'watch']);

	grunt.registerTask('mod', ['modernizr']);
	

};