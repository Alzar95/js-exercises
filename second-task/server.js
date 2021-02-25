const http = require('http');
const fs = require('fs');
const open = require('open');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    }).listen(port, hostname);
});

open('http://127.0.0.1:3000/?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd');
