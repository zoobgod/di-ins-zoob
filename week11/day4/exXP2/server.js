// const express = require('express')
// const app = express()

// const user = {
//   firstname: 'John',
//   lastname: 'Doe'
// }

// app.get('/users', (req, res) => {
//   res.send(JSON.stringify(user))
// })

// app.listen(3000, () => {
//   console.log('Server running on port 3000')
// })



const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/:id', (req, res) => {
  const id = req.params.id
  const user = {
    firstname: 'John',
    lastname: 'Doe',
    id: id
  }
  res.json(user)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
