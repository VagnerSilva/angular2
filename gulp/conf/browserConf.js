const conf = require('./config');
const superstatic = require('superstatic');


module.exports = () => {

    const options =  {
        "server": {
            "baseDir": conf.app,
            "middleware": superstatic({"debug":false})
        },
        "ghostMode": {
            "clicks": true,
            "location": false,
            "forms": true,
            "scroll": true
        },
        "injectChanges": true,
        "logFileChanges": true,
        "logLevel": 'debug',
        "logPrefix": 'server',
        "notify": true,
        "reloadDelay": 1000
    };

    return options;

}

