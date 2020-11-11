const mongoose = require('mongoose');



exports.DB = () => {
    mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Good job, you started your DB!")
    });
}

exports.storeElement = async(element) => {
    await element.save(() => {
        console.log("successfully saved this in DB!")
    })
}