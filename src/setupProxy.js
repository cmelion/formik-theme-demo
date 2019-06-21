const proxy = require('http-proxy-middleware');
const pkg = require('../package.json');

module.exports = function(app) {
    const {apiPort, baseURL, defaultTarget, htmlExtension } = pkg.config;
    const options = {
        target: defaultTarget + apiPort,
        pathRewrite: {
            '^/api/login':  '/api/login' + htmlExtension,
            '^/api/logoutspa':  '/api/logoutspa' + htmlExtension
        }
    };

    app.use(proxy(baseURL, options));
    app.use(proxy('/assets/tools-common-styles.css', { target:  defaultTarget + apiPort }));
};
