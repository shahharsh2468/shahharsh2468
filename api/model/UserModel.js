const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    user_name : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    mobile : {
        type: Number,
        required: true
    },
    status:{
        type: Number,
        enum: [0, 1, 2],
        default: 1
    }
})

userSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.user_id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

// we will create new collection
const Users = new mongoose.model('Users', userSchema);

module.exports = Users;