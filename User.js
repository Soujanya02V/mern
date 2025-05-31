// this file is under folder backend/model
const mongoose = require('module');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        requireed: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    Date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema)
