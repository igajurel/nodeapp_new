//this is the server node.js file
//to load http module,create a server, open a port and listen on it
//accept client request and send response

var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

//calling another js script file with python logic
/* 
var another = require('./sortage.js');
console.log(another);
another.data.timestamp();
another.data.currentDate(); 
*/

var input_age_list = [7,5,6];
console.log('Input=',input_age_list);
var another1 = require('./sortage.js')(input_age_list);
console.log('Output=',another1);

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    let x=''
    //response.end('Hello World from GajjuBhai.com!\n');
    fs.readFile('./index.html',null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Error found 404 in this app-dig now');
        }
        else{
            response.write(data);
            if(request.method == 'POST'){ // && request.url == './index.html'
                let body = '';
                let x = '';

                request.on('data', chunk =>{
                    body += chunk.toString();
                });

                
                request.on('end', () =>{
                    body = querystring.parse(body);
                    console.log(body);
                    x += JSON.stringify(body['user[name]']);
                    response.end(x);
                });
            }
        }
        //response.end('To Be Continued from GajjuBhai.com 123!\n');
    });
}).listen(9080);

console.log('Server running at http://127.0.0.1:9080/');

