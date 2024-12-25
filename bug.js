const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  let counter = 0;
  while (counter < 1000000000) {
    counter++;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});