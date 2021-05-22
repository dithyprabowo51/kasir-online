const { Employee } = require('../models')

class EmployeeController {
  static async addEmployee(req, res, next) {
    try {
      const { email, fullname, role, phone, city, password } = req.body
      const newEmployee = await Employee.create({
        email, fullname, role, phone, city, password
      })
      res.status(201).json({
        message: 'Created new employee successfully',
        data: {
          id: newEmployee.id,
          email: newEmployee.email,
          role: newEmployee.role
        }
      })
    } catch (err) {
      next(err)
    }
  }

  static async readAllEmployees(req, res, next) {
    try {
      const page = req.query.page || 1
      const employees = await Employee.findAll({
        where: { role: 'kasir' },
        offset: (page * 5) - 5,
        limit: 5,
        order: [['id', 'ASC']]
      })
      const mapEmployees = employees.map(employee => {
        return {
          id: employee.id,
          fullname: employee.fullname,
          email: employee.email,
          role: employee.role,
          phone: employee.phone,
          city: employee.city,
        }
      })
      res.status(200).json({ data: mapEmployees })
    } catch (err) {
      next(err)
    }
  }

  static async deleteEmployee(req, res, next) {
    try {
      const { employeeId } = req.params
      if (!employeeId) throw { status: 404, message: 'Data employee not found' }
      const employee = await Employee.findByPk(employeeId)
      if (!employee) throw { status: 404, message: 'Data employee not found' }

      await Employee.destroy({
        where: { id: employeeId }
      })

      res.status(200).json({
        message: 'Deleted employee successfully',
        data: {
          id: employee.id,
          email: employee.email,
          fullname: employee.fullname,
          role: employee.role,
          phone: employee.phone,
          city: employee.city
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EmployeeController