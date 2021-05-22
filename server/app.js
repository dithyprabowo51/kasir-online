if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler.js')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Router
app.use(routes)

// Error Handler
app.use(errorHandler)

app.listen(PORT, () => console.log('Server is running on port', PORT))