const jwt = require('jsonwebtoken')

const generateToken = payload => jwt.sign(payload, process.env.JWT_SECRET)

const decodedToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    // err
    return false
  }
}

module.exports = { generateToken, decodedToken }
