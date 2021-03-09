const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config(path.join(__dirname, "../.env"))

const myAuthentication = (req, res, next) => {

    if (req.headers.cookie) {
        console.log(req.headers.cookie)
        next();
    }

}

module.exports = myAuthentication