var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');

function compile(watch) {
  browserify('./src/index.js', { debug: false /* true for sourcemap */ })
    .transform(babel)
    .bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
}

gulp.task('build', function() { return compile(); });

gulp.task('default', ['build']);
