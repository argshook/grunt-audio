/*
 * grunt-audio
 * https://github.com/argshook/dotfiles
 *
 * Copyright (c) 2016 Arijus Šukys
 * Licensed under the MIT license.
 */

'use strict';

var Player = require('player');

module.exports = function(grunt) {
  var music = new Player(__dirname + '/../audio/elevator.mp3');

  grunt.registerTask('start-audio', function() {
    return music.play();
  });

  grunt.registerTask('stop-audio', function() {
    return music.stop();
  });
};

