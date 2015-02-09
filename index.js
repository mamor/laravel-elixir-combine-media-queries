'use strict';

var gulp   = require('gulp');
var elixir = require('laravel-elixir');
var cmq    = require('gulp-combine-media-queries');

elixir.extend('cmq', function(src, output, options) {

    gulp.task("cmq", function() {
        gulp.src(src)
            .pipe(cmq(options))
            .pipe(gulp.dest(output));
    });

    return this.queueTask("cmq");

});
