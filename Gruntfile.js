module.exports = function(grunt) {
  'use strict';
  // Equivalent to grunt.loadNpmTasks for each thing starting with grunt- in package.json
  require('load-grunt-tasks')(grunt);
    
  grunt.initConfig({
    watch: {
      files: ['**/*.less', 'index.html'],
      tasks: ['default'],
      options: {
        livereload: true
      },
    },

    less: {
      all: {
        files: {
          "stylesheets/main.css": "less/main.less"
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    
  });


  grunt.registerTask('default', [
    'less'
  ]);
};