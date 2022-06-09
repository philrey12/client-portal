const express = require('express')
const cors = require('cors')

const app = express()

// enable cors
app.use(cors())

// routes
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}...`))
