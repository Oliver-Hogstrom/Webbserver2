const express = require('express')
const labb = require ('./labb')
const app = express()
const port = 3000

const clientDir = __dirname + `\\client\\`

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))

app.get('/style', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})

app.get('/fbi', (req, res) => {
  res.sendFile(clientDir + 'FBI.png')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))