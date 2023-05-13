const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs');
const server = http.createServer(function (req, res) {
     if (req.url === "/") {
        fs.readFile("index.html", 'utf8', function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Page not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html' });
                res.write(pgResp);
            }
        res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>default content</h1>');
        res.end();
    }
});
     server.listen(8000);
     console.log('Server is running on http://localhost:8000');
