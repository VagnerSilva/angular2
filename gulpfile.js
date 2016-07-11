
const gulp = require('gulp');
const tsc  = require('./gulp/task/tsc');
const clean = require('./gulp/task/clean');

gulp.task('clean',clean(gulp)); // remove the app/www folders
gulp.task('tsc',tsc(gulp)); // compile typscript for js files
