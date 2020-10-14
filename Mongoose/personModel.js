const  mongoose  = require("mongoose")


const personSchema = new mongoose.Schema({
    msg: String,
    age: Number
  });

  const Msg = mongoose.model('MSG', personSchema)

  exports.createPerson = (fname, age) =>{
      let msg = new Msg({
          msg: msg,
          age: age
        })
        return msg
  }