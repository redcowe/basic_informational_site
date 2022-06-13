const http = require('http');
const path = require('path');
const { URL } = require('url');
require('dotenv').config();


const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    let parsedURL = URL.parse(/^\/+|\/+$/g, "");
    console.log(path);
    let qs = parsedURL.query;
    let headers = req.headers;
    let method = req.method.toLocaleUpperCase();

    req.on("data", () => {
        console.log("got some data");
    })

   
    req.on("end", () => {
        let route =
            typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"];
        let data = {
            path: path,
            queryString: qs,
            headers: headers,
            method: method
        }
        route(data, res)
    })    
})

server.listen(PORT, () => {
    console.log(`Server is running on 192.168.0.32:8080`);
})

const routes = {
    index: (data, res) => {
    
    },
    about: (data, res) => {

    },
    notFound: (data, res) => {
        
    }

}




