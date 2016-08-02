/* MODULES */
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var karmaServer = require('karma').Server;
var del         = require('del');

/* CONFIGURATION */
var CONF = {};
CONF.SOURCE_DIR = './src/';
CONF.BUILD_DIR  = './build/';
CONF.SPEC_DIR   = './spec/';

/* TASKS */
gulp.task('clean', function(){
    del([CONF.BUILD_DIR + '**/*']);
});

gulp.task('build', ['clean', 'test'], function () {
    return browserify(CONF.SOURCE_DIR + 'app.js')
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .on('error', function (err) {
            console.error(err);
            this.emit('end');
        })
        .pipe(source('build.js'))
        .pipe(gulp.dest(CONF.BUILD_DIR));
});

gulp.task('test', ['clean'], function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['build']);
