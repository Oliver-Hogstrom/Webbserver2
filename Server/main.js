const express = require('express')
const labb = require ('./labb')
const app = express()
const port = 3000

//let sum = labb.add(1, 2) //3
//let dif = labb.sub(1, 2) //3
//let prod = labb.multi(5, 2) //3

console.log("Summan är: " + labb.add(1, 2) + " Differansen:" + labb.sub(1, 2) + " Produketen; " + labb.multi(5, 2))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))