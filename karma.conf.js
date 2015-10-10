module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/**/*.js',
            'spec/**/*.js'
        ],

        exclude: [],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'spec/**/*.js': ['browserify']
        },

        browserify: {
            transform: ['babelify']
        },

        babelPreprocessor: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS2'],

        captureTimeout: 20000,

        singleRun: true,

        reportSlowerThan: 500,

        plugins: [
            'karma-jasmine',
            'karma-phantomjs2-launcher',
            'karma-browserify',
            'karma-babel-preprocessor'
        ]
    });
};
