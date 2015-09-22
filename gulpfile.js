/* MODULES */
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var babel       = require('babelify');
var karma       = require('gulp-karma');
var rimraf      = require('rimraf');

/* CONFIGURATION */
var CONF = {};
CONF.SOURCE_DIR = './src/';
CONF.BUILD_DIR  = './build/';
CONF.SPEC_DIR   = './spec/';

/* TASKS */
gulp.task('clean', function(cb){
    rimraf('build/', cb);
});

gulp.task('build', ['clean', 'test'], function () {
    return browserify(CONF.SOURCE_DIR + 'app.js')
        .transform(babel)
        .bundle()
        .on('error', function (err) {
            console.error(err);
            this.emit('end');
        })
        .pipe(source('build.js'))
        .pipe(gulp.dest(CONF.BUILD_DIR));
});

gulp.task('test', ['clean'], function () {
    return gulp.src(CONF.SPEC_DIR + '**/*.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        })).on('error', function (err) {
            throw err;
        });
});

gulp.task('default', ['build']);
