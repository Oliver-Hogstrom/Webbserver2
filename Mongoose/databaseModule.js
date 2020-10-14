const mongoose = require('mongoose');
const personModel = require ('./personModel')

exports.DB = () =>{
mongoose.connect('mongodb://localhost/IT18', {useNewUrlParser: true,  useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Good job, you started your DB!")
});
}

exports.storeElement = (element)=>{
  element.save(() =>{
      console.log("successfully saved this in DB!")
  })
}
