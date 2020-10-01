const  mongoose  = require("mongoose")


const personSchema = new mongoose.Schema({
    fname: String,
    age: Number
  });

  const Person = mongoose.model('Person', personSchema)

  exports.createPerson = (fname, age) =>{
      let person = new Person({
          fname: fname,
          age: age
        })
        return person
  }