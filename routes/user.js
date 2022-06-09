const express = require('express')
const router = express.Router()

// dashboard page
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        dashboard: 'active',
        profile: '',
        projects: '',
        billings: '',
        title: 'Dashboard - Client Portal'
    })
})

// profile page
router.get('/profile', (req, res) => {
    res.render('profile', {
        dashboard: '',
        profile: 'active',
        projects: '',
        billings: '',
        title: 'Profile - Client Portal'
    })
})

// projects page
router.get('/projects', (req, res) => {
    res.render('projects', {
        dashboard: '',
        profile: '',
        projects: 'active',
        billings: '',
        title: 'Projects - Client Portal'
    })
})

// billings page
router.get('/billings', (req, res) => {
    res.render('billings', {
        dashboard: '',
        profile: '',
        projects: '',
        billings: 'active',
        title: 'Billings & Invoices - Client Portal'
    })
})

module.exports = router
