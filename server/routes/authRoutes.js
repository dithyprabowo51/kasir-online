const router = require('express').Router()
const AuthController = require('../controllers/AuthController.js')

router.post('/login', AuthController.login)

module.exports = router