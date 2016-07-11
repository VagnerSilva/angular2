const tsc = require('gulp-typescript');
const conf = require('../conf/config')();
const sourcemaps  = require('gulp-sourcemaps');
const path  = require('path');
const tsProject = tsc.createProject(path.resolve('./gulp/conf/tsconfig.json'));

/**
 * @param {gulp} gulp
 * @return{void}
 */
function compile (gulp) {
    return () => {
        const tsResult = gulp
            .src(conf.tsSrc) // root for ts files
            .pipe(tsc(tsProject)); // tsc config

                return tsResult.js
                    .pipe(sourcemaps.init())
                    .pipe(sourcemaps.write('.'))
                    .pipe(gulp.dest(conf.tsDest));
    };
}
 
module.exports = compile;
