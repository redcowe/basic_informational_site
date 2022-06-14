const http = require('http');
const fs = require('fs');
require('dotenv').config();


const PORT = process.env.PORT || 3000;

//Helper function for displaying 404 messages
function displayNotFound() {
    
    fs.readFile('./404.html', (err, data) => {
        if (err) {
            console.log("Unable to read file");
            process.exit(1);
        }
        return data;
    })
    
}

const server = http.createServer((req, res) => {
   if (req.url === '/index') {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(displayNotFound());
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });   
   }
   else if (req.url === '/about') {
    fs.readFile('./about.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(displayNotFound());
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
   }
   else if (req.url === '/contact-me') {
    fs.readFile('./contact-me.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(displayNotFound());
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
   }
   else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(displayNotFound());
   }
})

server.listen(PORT, () => {
    console.log(`Server is running on 192.168.0.32:8080`);
})




