const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/formData', (req, res) => {
  const email = req.body.email
  const message = req.body.message
  res.send(`${email} sent you a message "${message}"`)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})