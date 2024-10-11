const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        fullName: { type: String, require: true, unique: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        dob: { type: Date },
        phone: { type: String, unique: true },
        address: { type: String },
        avatar: { type: String },
        role: { type: Object, require: true },
        status: { type: Boolean },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = { User };
