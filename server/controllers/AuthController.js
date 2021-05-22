const { Employee } = require('../models')
const { generateToken } = require('../helpers/jwt.js')
const { comparePassword } = require('../helpers/bcrypt.js')

class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) throw { status: 400, message: 'Invalid email or password' }
      const employee = await Employee.findOne({ where: { email } })
      if (!employee) throw { status: 400, message: 'Invalid email or password' }
      const isValidPassword = comparePassword(password, employee.password)
      if (!isValidPassword) throw { status: 400, message: 'Invalid email or password' }
      const access_token = generateToken({
        id: employee.id,
        email: employee.email,
        role: employee.role,
      })
      res.status(200).json({ access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AuthController