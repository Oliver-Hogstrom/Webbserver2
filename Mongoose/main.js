const express = require('express')
const labb = require ('./labb')
const databaseModule = require ('./databaseModule')
const perosnModel = require ('./personModel')
const app = express()
const port = 3000

// getting-started.js

databaseModule.DB()

app.use(express.json())
app.use(express.urlencoded())


let shit = "You are not Oliver you little shit!!!"
let Yay = "You may pass Master Oliver!"

const clientDir = __dirname + `\\client\\`



//These are all get to access the webbpage, css and pictures
app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))

app.get('/style', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})

app.get('/fbi', (req, res) => {
  res.sendFile(clientDir + 'FBI.png')
})

//This is the POST for fname and age and it will hopefully match a if statment
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
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))