const http = require('http');

const server = http.createServer((req, res) => {
    //console.log('request processed');
    res.end('request processed');    
});

server.listen(3000);