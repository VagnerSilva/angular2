const app  = 'app/src/';
const build = 'app/www/';
const dev  = 'src/';
const browserConf = require('./browserConf');

module.exports = () => {

    const config = {
        "app": app,
        "build": build,
        "dev": dev,

        /** html*/
        "htmlSrc": dev + 'index.html', // Standard entry
        "htmlDest": app, // Output for dev
        "htmlBuild": build, //  Output for production

        
        "tsSrc": "src/**/*.ts",
        "tsDest": app,

        /** js*/
        "jsSrc": "app/src/**.*.js", // Standard entry
        "jsDest": build, //  Output for production

         /** css*/
         
        "cssSrc": dev + "**.*.css",  // Standard entry
        "cssDest": app, // Output for dev
        "htmlBuld": build, //  Output for production

        /** BrowserSync*/
        "browserSync":{
            options: browserConf() // config browserSync
        }
        
    };

    return config;

};


