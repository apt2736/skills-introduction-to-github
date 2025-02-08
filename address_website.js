const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'html/main_site.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    // Set the content type based on the file extension
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read the file from the file system
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // If the file is not found, serve a 404 page
                fs.readFile(path.join(__dirname, 'html/404.html'), (err, data) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf-8');
                });
            } else {
                // If there is a server error, serve a 500 error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // If the file is found, serve it with the correct content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 2736;
const HOST = '10.7.101.216'; // Set the IP address to localhost

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});