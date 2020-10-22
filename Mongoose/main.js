const express = require('express')
const ejs = require ('ejs')
const databaseModule = require ('./databaseModule')
const msgModel = require ('./msgModel')
const perosnModel = require ('./personModel')

const app = express()
const port = 3000

// getting-started.js

databaseModule.DB()

app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')

// let shit = "You are not Oliver you little shit!!!"
// let Yay = "You may pass Master Oliver!"

const clientDir = __dirname + `\\client\\`
app.use(express.static(clientDir))


app.get('/', (req, res) =>{ 
  res.render("pages/index.ejs", {name:""})
})

app.get('/msg', async (req, res) => {
  const posts = await msgModel.getAllMessages()
  res.render('pages/msg.ejs', {msg: posts})
})

app.post('/', function (req, res,) {

  let person = perosnModel.createPerson(req.body.fname, req.body.age)

  databaseModule.storeElement(person)

  res.render("pages/index.ejs", {name:" " + req.body.fname})
})

app.post('/message', async function (req, res) {

  let post = msgModel.createMsg(req.body.msg, req.body.name)
  databaseModule.storeElement(post)

  res.redirect('/msg')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))