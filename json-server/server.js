// server.js
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const source = 'json-server/db.json';
const jsonServer = require('json-server');
const port = require('../package.json').config.apiPort;
const routes = require('./routes.json');
const data = require('./db.json');

const defaultsOpts = {
    static: 'json-server/public'
};

const server = jsonServer.create();
const router = jsonServer.router(source);
const middlewares = jsonServer.defaults(defaultsOpts);

function prettyPrint(object, rules) {
    const host = 'localhost';
    const root = `http://${host}:${port}`;

    console.log();
    console.log(chalk.bold('  Resources'));
    for (let prop in object) {
        console.log('  ' + root + '/' + prop);
    }

    if (rules) {
        console.log();
        console.log(chalk.bold('  Other routes'));
        for (var rule in rules) {
            console.log('  ' + rule + ' -> ' + rules[rule]);
        }
    }

    console.log();
    console.log(chalk.bold('  Home'));
    console.log('  ' + root);
    console.log();
}

const walkSync = (dir, filelist = []) => fs.readdirSync(dir)
    .map(file => fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file))[0]);

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use(function(req, res, next) {
    if (req.method === 'POST') {
        switch (req.url) {
            case '/login':
                console.log('Login', req.body);
                req.body.firstName = 'Test';
                req.body.lastName = 'Testerson';
                req.body.tokenSeed = 'JUaHJlZSBFeWVkI';
                break;

            // Using local json-server module so stay on same server and use _ to differentiate
            case '/api/_login.html?service=tools':
                console.log('Login', req.body);
                res.redirect('/api/logged-in.html?email=' + req.body.email);
                return;
                break;

            case '/api/v1/register':
                console.log('Register', req.body);
                var service = Object.keys(req.body.services)[0];
                req.body.status = [
                    {
                        service: service,
                        type: 'Success',
                        message: service + ' registration successful'
                    }
                ];
                req.body.user = data.user;
                break;

            default:
                console.log('Post operation', req.url);
        }
    }
    // Continue to JSON Server router
    next();
});

// Add this before server.use(router)
server.use(jsonServer.rewriter(routes));

server.use(router);

server.listen(port, function() {
    console.log();
    console.log(chalk.cyan('  \\{^_^}/ hi! Toolshed development server is running on port', port));

    // Display server information
    prettyPrint(data, routes);

    console.log(chalk.bold('  Static Resources'));
    _.flattenDeep(walkSync(defaultsOpts.static, [])).map(function(resource) {
        console.log('  ' + resource);
    });
    console.log();
});

// "concurrently" sends SIGTERM; see feature tests
// We need Jenkins to return 0 exit code so the build does not fail.
process.on('SIGTERM', () => {
    console.log('Received kill signal, shutting down gracefully');
    process.exit();
});
