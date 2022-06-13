const http = require('http');
const path = require('path');
const { URL } = require('url');
const fs = require('fs');
require('dotenv').config();


const PORT = process.env.PORT;


const server = http.createServer((req, res) => {
   if (req.url === '/index') {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end({message: 'Page not found'});
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });   
   }
})

server.listen(PORT, () => {
    console.log(`Server is running on 192.168.0.32:8080`);
})




