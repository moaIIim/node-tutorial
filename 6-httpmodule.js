const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome bACK')
    }
    if (req.url === '/about') {
        res.end('About')
    } else {
        res.end('Nah')
    }
});

server.listen(5000)