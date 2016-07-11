const conf = require('../conf/config')();
const clean = require('gulp-clean');


module.exports = (gulp) => {
// remove the app/www folders
    return () => {
        gulp.src(conf.build)
        .pipe(clean());
    };
};
