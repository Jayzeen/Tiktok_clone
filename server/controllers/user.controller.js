const userService = require("../services/user.service");


// Sign in to a new account
exports.signup = (req, res) => {
    const user = req.body;

    userService
        .signup(user)
        .then(user => {
            res.status(200).json({ success: true, data: user });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
}

// Log in to account
exports.login = (req, res) => {
    const { email, password } = req.body;

    userService
        .login(email, password)
        .then(user => {
            res.status(200).json({ success: true, data: user });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
}


// Get all users
exports.getUsers = (req, res) => {
    userService
        .getUsers()
        .then(users => {
            res.status(200).json({ success: true, data: users });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: "Getting list of Users failed" });
        });

};


// Get user By email
exports.getUserByEmail = (req, res) => {
    const email = req.body.email;
    userService
        .getUserByEmail(email)
        .then(user => {
            res.status(200).json({ success: true, data: user });
        })
        .catch((err) => {
            res.status(400).json({ success: false, error: err.message });
        });
};