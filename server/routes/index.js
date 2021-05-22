const router = require('express').Router()
const authRoutes = require('./authRoutes.js')
const employeeRoutes = require('./employeeRoutes.js')

router.use(authRoutes)
router.use('/employees', employeeRoutes)

module.exports = router