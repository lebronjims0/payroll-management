const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Error reading file');
        } else {
            res.write(data);
        }
        res.end();
    });

});

server.listen(port, function (error) {
  if (error) {
    console.error(`Error occurred: ${error.message}`);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
