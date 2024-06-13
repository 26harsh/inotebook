const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello Harsh!')
// })

// In this way we can create a routes ....but it we will maintain it seperate
// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello Login!')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello SignUp!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

