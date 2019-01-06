const expressJwt = require('express-jwt');

const config = require('../../config/env.config');

function jwt() {
    const { secret } = { "secret": config.jwt_secret }; 
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            '/user/isValidUser',
            '/user/register'
        ]
    });
}

module.exports = jwt;