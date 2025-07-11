const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }

});

const User = mongoose.model("User", userSchema);
module.exports = User;
