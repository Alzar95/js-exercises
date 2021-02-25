const http = require('http');
const fs = require('fs');
const open = require('open');

let requestGet = false;
let requestPost = false;

const index = fs.readFileSync('./index.html');

http.createServer((req, res) => {
    if (req.url === '/data') {
        requestGet = true;
    } else if (req.url === '/time') {
        requestPost = true;
    }

    if (requestGet && requestPost) {
        console.log('Оба ответа получены');
        requestGet = requestPost = false;
        res.end('Оба ответа получены');
    } else {
        res.end(index);
    }
}).listen(8000);

open('http://localhost:8000');
