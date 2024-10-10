const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        maxlength: 60
    },
    dob: {
        type: Date
    },
    email: {
        type: String,
        unique: true,
        required: true,
        maxlength: 60
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        maxlength: 60
    },
    address: {
        type: String,
        required: true,
        maxlength: 60
    },
    avatar: {
        type: String
    },
    username: {
        type: String,
        unique: true,
        required: true,
        maxlength: 60
    },
    pass: {
        type: String,
        required: true,
        maxlength: 60
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    status: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
