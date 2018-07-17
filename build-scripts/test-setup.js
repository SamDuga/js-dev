// Register babel to transpile before tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't use
require.extensions['.css'] = function() {};
