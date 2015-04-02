module.exports = function(grunt) {
  'use strict';
  // Equivalent to grunt.loadNpmTasks for each thing starting with grunt- in package.json
  require('load-grunt-tasks')(grunt);
    
  grunt.initConfig({
    watch: {
      files: ['src/**/*.less', 'index.html', 'src/javascripts/*.*'],
      tasks: ['default'],
      options: {
        livereload: true
      },
    },

    less: {
      all: {
        files: {
          "main.css": "src/less/main.less"
        }
      }
    },
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
      // ...
    },   // Make sure code styles are up to par and there are no obvious mistakes
    
  });


  grunt.registerTask('default', [
    'less'
  ]);
};