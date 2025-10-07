const http = require('http');
const fs = require('fs');    // part of Lecture 33
const { log } = require('console');

const server = http.createServer((req, res) => {
// Lecture 30 below 👇
    // console.log(req);
    // console.log(req.url, req.method, req.headers);


// Lecture 31 below 👇
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // res.write('</html>');
    // res.end();

// Lecture 32 below 👇
    // const url = req.url;
    // if(url === '/') {
    //     res.write('<html>');
    //     res.write('<head><title>Enter Message</title></head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    //     res.write('</html>');
    //     return res.end();
    // }
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My First Page</title></head>');
    //     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    //     res.write('</html>');
    //     res.end();

// Lecture 33 below 👇
    // const url = req.url;
    // const method = req.method;
    // if(url === '/') {
    //     res.write('<html>');
    //     res.write('<head><title>Enter Message</title></head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    //     res.write('</html>');
    //     return res.end();
    // }
    // if (url === '/message' && method === 'POST') {
    //     fs.writeFileSync('message.txt', 'DUMMY');
    //     res.statusCode = 302;
    //     res.setHeader('Location', '/');
    //     return res.end();
    // }
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // res.write('</html>');
    // res.end();


// Lecture 34 below 👇

    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.complete('data', (chunk) => {
            console.log('chunk',chunk);
            body.push(chunk);         
        })
        req.on('end', () => {
            buffer = Buffer.concat(body).toString();
        })
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    
})
server.listen(3000);