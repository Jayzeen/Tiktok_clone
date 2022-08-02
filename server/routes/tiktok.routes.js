const express = require("express");
const userController = require("../controllers/user.controller");
const postController = require("../controllers/post.controller");
const router = express.Router();


router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.get("/users", userController.getUsers);
router.get("/getUser", userController.getUserByEmail);


// Routes for Posts schema
router.post("/posts/createPost", postController.createPost);
router.get("/posts/getUserPosts", postController.getUserPosts);
router.get("/posts/getAllPosts", postController.getAllPosts);


module.exports = router;