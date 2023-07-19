const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<html><body>')
  res.write('<h1>This is my first response.</h1>')
  res.write('<h2>This is my second response.</h2>')
  res.write('<h3>This is my third response.</h3>')
  res.write('</body></html>')
  res.end()
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})