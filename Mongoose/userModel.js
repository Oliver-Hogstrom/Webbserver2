const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    fname: String,
    password: String,
    email: String
});

const User = mongoose.model('user', userSchema)

exports.createUser = (fname, email, password) => {
    let user = new User({
        fname: fname,
        email: email,
        password: password
    })
    return user
}

exports.getUser = async(fname) => {
    var user = await User.findOne({ fname: fname })
    return user
}

// exports.getAllMessages = async() => {
//     let messages = await Msg.find({})
//     return messages
// }