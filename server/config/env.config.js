/*
* Create and export configration variable
*
*/

// Container for the all the environments
var environments = {};

//Dev (default) environments
environments.DEV = {
    "port": 3000,
    "envname": 'development'
}

//Prod environments
environments.PROD = {
    "port": 5000,
    "envname": 'production'

}

// Detwermine which environment was pass as a command-line argument.
var currentEnvironment = typeof(process.env.NODE_ENV)=='string' ? process.env.NODE_ENV.toLowerCase() : '';

console.log(process.env.NODE_ENV);

// Check the current environment is one of the environment above.If not default to development.
var environmenToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.DEV;

module.exports = environmenToExport;


// To run production env : NODE_ENV = PROD node index.js