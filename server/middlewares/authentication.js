const { Employee } = require('../models')
const { decodedToken } = require('../helpers/jwt.js')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { status: 401, message: 'Invalid access token' }
    const decoded = decodedToken(access_token)
    if (!decoded) throw { status: 401, message: 'Invalid access token' }
    const employee = await Employee.findOne({
      where: {
        id: decoded.id,
        email: decoded.email
      }
    })
    console.log(decoded, '<<<employee')
    if (!employee) throw { status: 401, message: 'Invalid access token' }
    req.employee = employee
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication