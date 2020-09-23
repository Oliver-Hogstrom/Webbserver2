// getting-started.js 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/IT18', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    fname: String,
    age: Number
  });

  const Person = mongoose.model('Person', personSchema)

  var oliver = new Person({fname: "Oliver", age: "17"})

  oliver.save()
  