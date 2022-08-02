const jwtDecode = require("jwt-decode");


exports.getEmail = (req) => {
    const token = req.headers.authorization.split(" ")[1].split(".")[1];

    const payload = JSON.parse(Buffer.from(token, 'base64').toString());

    email = payload.email;

    return email
}
