#!/usr/bin/env node

/**
 * Module dependencies.
 */

let config = require('../server/config/config');

let app = require(config.paths.serverPath);
let debug = require('debug')('project-c:server');
let http = require('http');

/**
 * Get port from environment and store in Express.
 */

// let port = normalizePort(process.env.PORT || '3000');
// let port = listen(process.env.PORT || 300);
// app.set('port', port);
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// server.listen(process.env.PORT || 3000);
// server.on('error', onError);
// server.on('listening', onListening);
app.listen(port, host, function() {
    console.log("Server started.......");
});
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    /// debug('Listening on ' + bind);
}