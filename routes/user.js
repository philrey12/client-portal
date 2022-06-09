const express = require('express')
const router = express.Router()

// home page
router.get('/user', (req, res) => {
    res.send('User Page')
})

module.exports = router
