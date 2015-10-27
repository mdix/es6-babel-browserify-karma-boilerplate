[![Dependency Status](https://www.versioneye.com/user/projects/560a4e40a081be000a000426/badge.svg?style=flat)](https://www.versioneye.com/user/projects/560a4e40a081be000a000426) [![Build Status](https://travis-ci.org/mdix/es6-babel-browserify-karma-boilerplate.svg)](https://travis-ci.org/mdix/es6-babel-browserify-karma-boilerplate)

## ES6 Babel Browserify Karma Boilerplate
This is an boilerplate repo to make it easy to create a project where production code & tests can be written in ES6. 
It's just a combination of gulp (build tool), browserify (bundler), karma (testing framework) and babel (JS compiler). 

### setup

```bash
# Clone repo
git clone --depth=1 --branch=master https://github.com/mdix/es6-babel-browserify-karma-boilerplate.git
cd es6-babel-browserify-karma-boilerplate/

# Install dependencies
npm install
```

### running
```bash

./node_modules/.bin/gulp
```

This will run the karma tests and, after they ran successful, build the application in ES5 to `build/build.js`.

### classical inheritance vs. object composition
Decide whether you want to use classical inheritance (i. e. use ES6 'class') or object composition (i. e. use stamps). You can read more on stamps [here](https://github.com/stampit-org/stampit/blob/master/README.md).

### where to go from here
This is really just a base setup. You might want to:

* add a [index.html](https://raw.githubusercontent.com/h5bp/html5-boilerplate/master/src/index.html) and load 'dist/build.js'
* add a [webserver](https://www.npmjs.com/package/gulp-webserver) with livereload support
* add a [javascript linter](https://www.npmjs.com/package/gulp-eslint/)
* add [gulp util](https://www.npmjs.com/package/gulp-util) to work with production & development environment
