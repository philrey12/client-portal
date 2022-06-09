const express = require('express')
const router = express.Router()

// home page
router.get('/', (req, res) => {
    res.redirect('/user/dashboard')
})

module.exports = router
