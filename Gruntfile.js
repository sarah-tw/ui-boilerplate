module.exports = function(grunt) {
  'use strict';
  // Equivalent to grunt.loadNpmTasks for each thing starting with grunt- in package.json
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      files: ['assets/**/*.less', 'index.html', 'assets/javascripts/*.*'],
      tasks: ['default'],
      options: {
        livereload: true
      },
    },

    clean: {
        assets: {
            src: ['build/**'],
            options: {
              force: true
            }
        }
    },    
    copy: {
      assets: {
        files: [{
          expand: true,
          cwd: 'assets/less',
          src: '*.less',
          dest: 'build/stylesheets/less/'
        },
        {
          expand: true,
          cwd: 'assets/images',
          src: '*.*',
          dest: 'build/images/'
        },
        ]
      }
    },

    less: {
      all: {
        options: {
            paths: ['../../bower_components/bootstrap/less'],
            sourceMap: true,
            sourceMapFilename: 'build/stylesheets/main.css.map',
            sourceMapURL: 'main.css.map',
            sourceMapBasepath: 'build/stylesheets',
            sourceMapRootpath: '/build/stylesheets/less',
            compress: true
        },        
        files: {
          "build/stylesheets/main.css": "assets/less/main.less"
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/javascript/main.min.js': ['assets/**/*.js']
        }
      }
    },
    // compress: {
    //     images: {
    //         options: {'mode': 'gzip'},
    //         expand: true,
    //         cwd: 'assets/',
    //         src: 'images/*.*',
    //         dest: 'build/'
    //     }
    //     javascript: {
    //         options: {'mode': 'gzip'},
    //         expand: true,
    //         cwd: "build/javascripts",
    //         src: '../play-app/public/javascripts/*.js'//,
    //     }
    // },    

    webdriver: {
      options: {
          host: 'localhost',
          port: 4444,
          desiredCapabilities: {
              browserName: 'firefox'
          }
      },
      homepage: {
          tests: ['./uitest/*.js']
      }

    },

    mocha: {
      test: {
        src: ['spec/test-runner.html'],
        options: {
          run: true,
          log: true
        },
      }
    }
  });


  grunt.registerTask('default', [
    'less'
  ]);
};
