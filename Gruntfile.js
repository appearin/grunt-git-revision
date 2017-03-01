/*
 * grunt-git-revision
 * https://github.com/unfold/grunt-git-revision
 *
 * Copyright (c) 2013 Simen Brekken
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, just run the linter
  grunt.registerTask('default', ['jshint']);

};
