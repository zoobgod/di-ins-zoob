const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  const user = {
    firstname: 'John',
    lastname: 'Doe'
  }
  res.end(JSON.stringify(user))
})

server.listen(8080, () => {
  console.log('Server running on port 8080')
})