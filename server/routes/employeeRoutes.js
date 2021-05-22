const router = require('express').Router()
const EmployeeController = require('../controllers/EmployeeController.js')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

router.get('/', authentication, authorization, EmployeeController.readAllEmployees)
router.post('/', authentication, authorization, EmployeeController.addEmployee)
router.delete('/:employeeId', authentication, authorization, EmployeeController.deleteEmployee)

module.exports = router