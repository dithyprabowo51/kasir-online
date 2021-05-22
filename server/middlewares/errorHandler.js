const errorhandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message })
  }
  if (err.name === 'SequelizeUniqueConstraintError' || err.name === 'SequelizeValidationError') {
    const errors = err.errors.map(error => error.message)
    return res.status(400).json({ message: errors })
  }
  res.status(500).json(err)
}

module.exports = errorhandler
