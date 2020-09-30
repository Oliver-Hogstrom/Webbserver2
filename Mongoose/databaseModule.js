
exports.mongoose = ()=>{
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/IT18', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Good job, you started your DB!")
});
}

const personSchema = new mongoose.Schema({
    fname: String,
    age: Number
  });
  
  const Person = mongoose.model('Person', personSchema)

  exports.storePerson = (fname,age) => {

  var person = new Person
  ({fname:fname, age: age})

  person.save()
  }