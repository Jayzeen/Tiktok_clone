const postService = require("../services/post.service");
const { getEmail } = require("../utils/decodeToken");


// Create a new post
exports.createPost = (req, res) => {
    const post = req.body;

    postService
        .createPost(post, getEmail(req))
        .then(post => {
            res.status(200).json({ success: true, data: post });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
}


// Get posts by userEmail
exports.getUserPosts = (req, res) => {

    postService
        .getUserPosts(getEmail(req))
        .then(posts => {
            res.status(200).json({ success: true, data: posts });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
}

// Get all posts
exports.getAllPosts = (req, res) => {

    postService
        .getAllPosts()
        .then(posts => {
            res.status(200).json({ success: true, data: posts });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
}