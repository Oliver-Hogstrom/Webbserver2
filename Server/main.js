// The boring but ipmortant stuff
const express = require('express')
const labb = require ('./labb')
const ejs = require ('ejs')
const app = express()
const port = 3000



mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})

app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

// This is for the HTML and a basic form, that shoots out different console logs.
let shit = "You are not Oliver you little shit!!!"
let Yay = "You may pass Master Oliver!"

const clientDir = __dirname + `\\client\\`

//These are all get to access the webbpage, css and pictures
app.get('/', (req, res) => {
res.render("pages/index.ejs")})

app.get('/style', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})

app.get('/fbi', (req, res) => {
  res.sendFile(clientDir + 'FBI.png')
})

//This is the POST for fname and age and it will hopefully match a if statment
app.post('/', function (req, res) {
  
  if( req.body.age == 17 && req.body.fname === "Oliver"){
      console.log(Yay)
  }
  else if(req.body.age != 17 && req.body.fname === "Oliver"){
      console.log(shit)
  }
  else if(req.body.age == 17 && req.body.fname != "Oliver"){
      console.log(shit)
  }
  else{
      console.log("You dont belong here!")
  }
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))