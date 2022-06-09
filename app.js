const express = require('express')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')

const app = express()

// enable cors
app.use(cors())

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// ejs
app.use(expressLayouts)
app.set('layout', './layouts/layout-2') // default layout
app.set('view engine', 'ejs')

// body parser
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}...`))
