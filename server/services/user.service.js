const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require("../models/User");


// Signup to new account
exports.signup = async (user) => {
    const generatedUserId = uuidv4();
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const existingUser = await User.exists({ email: user.email });

    if (existingUser) {
        throw new Error('User already exists, Please log in');
    } else {
        const sanitizedEmail = user.email.toLowerCase();

        const data = {
            user_id: generatedUserId,
            password: hashedPassword,
            email: user.email,
            first_name: user.firstName,
            last_name: user.lastName
        }

        const insertedUser = await User.create(data);
        const payload = {
            user_id: insertedUser.user_id,
            email: sanitizedEmail,
            hashedPassword: insertedUser.password
        }

        const token = jwt.sign(payload, sanitizedEmail, {
            expiresIn: 60 * 24,
        });

        return token
    }

};

// Login to existing account
exports.login = async (email, password) => {
    const existingUser = await User.exists({ email: email });

    if (existingUser) {
        const user = await User.find({ email: email });
        const correctPassword = await bcrypt.compare(password, user[0].password);
        const sanitizedEmail = user[0].email.toLowerCase();

        const payload = {
            user_id: user.user_id,
            email: sanitizedEmail,
            hashedPassword: user.password
        }

        if (user && correctPassword) {
            const token = jwt.sign(payload, email, {
                expiresIn: 60 * 24
            })
            return token
        } else {
            throw new Error('Invalid credentials')
        }
    }
    else {
        throw new Error('No such User exits, Please Signup')
    }

};



// Getting all users
exports.getUsers = async () => {
    const users = await User.find().select("-password");

    return users;
};


// Get user by Email
exports.getUserByEmail = async (email) => {
    const query = { email: email };

    const isUserExists = await User.exists(query);

    if (isUserExists) {
        const user = await User.find(query).select("-password");
        return user;
    } else {
        throw new Error('Get user by email failed');
    }

};