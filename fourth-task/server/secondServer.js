const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.3';
const port = 3605;

fs.readFile('../secondDomain.html', (err, html) => {
    if (err) throw err;

    http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    }).listen(port, hostname, () => {
        console.log('Server is up and running');
    });
});
