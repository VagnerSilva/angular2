const conf = require('../conf/config')();
const browser = require('browser-sync');


module.exports = () => {
// start browserSync
    var start = () => {
        if (browser.active) {
            return; // returns if enabled
        }
        browser(conf.browserSync.options);
    };

    return {
        "start": start,
        "reload": browser.reload
    };

};
