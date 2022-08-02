const Post = require("../models/Post");
const User = require("../models/User");

// Create a new post
exports.createPost = async (post, userEmail) => {

    const isUserExists = await User.exists({ email: userEmail });
    // const user = await User.find({ email: userEmail });

    if (isUserExists) {
        post.user_id = isUserExists._id
        const createdPost = await Post.create(post);

        return createdPost;
    }
    else {
        throw new Error('User doesnt Exist');
    }
}


// Get all posts for a single user by email
exports.getUserPosts = async (userEmail) => {
    const isUserExists = await User.exists({ email: userEmail });
    const query = { user_id: isUserExists._id };

    if (isUserExists) {
        const posts = await Post.find(query)
            .populate("user_id", "email first_name last_name url")

        return posts;
    }
    else {
        throw new Error('User doesnt Exist');
    }

}

// Get all posts for all users
exports.getAllPosts = async () => {
    const posts = await Post.find()
        .populate("user_id", "email first_name last_name url")

    return posts;
}
