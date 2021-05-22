const bcrypt = require('bcryptjs')

const hashing = passwordInput => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passwordInput, salt);
}

const comparePassword = (passwordInput, passwordHashed) => {
  return bcrypt.compareSync(passwordInput, passwordHashed)
}

module.exports = { hashing, comparePassword }