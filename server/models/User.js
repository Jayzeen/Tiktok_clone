const mongoose = require('mongoose');

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    user_id: String,
    password: String,
    email: String,
    first_name: String,
    last_name: String,
    url: String,
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
});

module.exports = models.User || model("User", UserSchema);