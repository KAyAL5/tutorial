const http = require('http');
const url = require('url');
const config = require('./config/config')

const server = http.createServer(function(req, res){

});

server.listen(3000, function() {
    console.log('Acdamy server on port: ' + config.port);
});