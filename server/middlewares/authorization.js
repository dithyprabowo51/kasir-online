const authorization = (req, res, next) => {
  if (req.employee.role !== 'admin') return res.status(403).json({ message: 'You have no access' })
  next()
}

module.exports = authorization