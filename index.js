require('dotenv').config()
console.log("hello world");
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kap', (req, res) => {
  res.send('kapish is the king')
})
app.get('/kap2', (req, res) => {
  res.send('<h1>kapish is the king<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})