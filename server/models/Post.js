const mongoose = require('mongoose');

const { Schema, model, models } = mongoose;

const PostSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    avatar: String,
    isFollowed: Boolean,
    video: String,
    caption: String,
    likes: Number,
    comments: Number,
    timestamp: Date,
    button_visible: Boolean,
});

module.exports = models.Post || model("Post", PostSchema);