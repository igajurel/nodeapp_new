//this is the main node.js application file
//to load http module,create a server, open a port and listen on it
//accept client request and send response

var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello World from GajjuBhai.com!\n');
}).listen(9080);

console.log('Server running at http://127.0.0.1:9080/');

