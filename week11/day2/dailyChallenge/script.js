// const largeNumber = require("./main.js")
const http = require('http');
const { getCurrentDateTime } = require('./main');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<p>The current date and time is: ${getCurrentDateTime()}</p>`);
  res.end();
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080/');
});

// const b = 5
// console.log(largeNumber + b)


// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html')
//   res.write(`<p>My Module is ${largeNumber}</p>`)
//   res.write('<h1>Hi there at the frontend</h1>')
//   res.end()
// })

// server.listen(3000, () => {
//   console.log("I'm listening")
// });