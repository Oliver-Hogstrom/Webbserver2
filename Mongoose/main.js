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

let shit = "You are not Oliver you little shit!!!"
let Yay = "You may pass Master Oliver!"

const clientDir = __dirname + `\\client\\`
app.use(express.static(clientDir))

//These are all get to access the webbpage, css and pictures
app.get('/', (req, res) =>{ 
  res.render("pages/index.ejs", {name:""})
})

app.get('/msg', (req, res) => {
  res.render('pages/msg.ejs')
})


// This is the POST for fname and age and it will hopefully match a if statment
app.post('/', function (req, res,) {

  let person = perosnModel.createPerson(req.body.fname, req.body.age)

  databaseModule.storeElement(person)
  

  if( req.body.age == 18 && req.body.fname === "Oliver"){
      console.log(Yay)
  }
  else if(req.body.age != 18 && req.body.fname === "Oliver"){
      console.log(shit)
  }
  else if(req.body.age == 18 && req.body.fname != "Oliver"){
      console.log(shit)
  }
  else{
      console.log("You dont belong here!")
  }
  res.render("pages/index.ejs", {name:req.body.fname})
})

app.post('/message', async function (req, res) {

  let message = msgModel.createMsg(req.body.msg, req.body.name)
  databaseModule.storeElement(message)

  await msgModel.find({name:"", msg:""});

  res.render('pages/msg.ejs')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))