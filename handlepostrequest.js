if(request.method == 'POST'){ // && request.url == './index.html'
let body = '';

request.on('data', chunk =>{
    body += chunk.toString();
});

request.on('end', () =>{
    body = querystring.parse(body);
    console.log(body);
    //response.write(body);
    response.end('Chaitanya Rajaa');
});
}