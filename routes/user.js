const express = require('express')
const router = express.Router()

// dashboard page
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        dashboard: 'active',
        profile: '',
        projects: '',
        billing_invoice: '',
        title: 'Dashboard - Client Portal'
    })
})

// profile page
router.get('/profile', (req, res) => {
    res.render('profile', {
        dashboard: '',
        profile: 'active',
        projects: '',
        billing_invoice: '',
        title: 'Profile - Client Portal'
    })
})

// projects page
router.get('/projects', (req, res) => {
    res.render('projects', {
        dashboard: '',
        profile: '',
        projects: 'active',
        billing_invoice: '',
        title: 'Projects - Client Portal'
    })
})

// billings page
router.get('/billing-invoice', (req, res) => {
    res.render('billing-invoice', {
        dashboard: '',
        profile: '',
        projects: '',
        billing_invoice: 'active',
        title: 'Billing & Invoice - Client Portal'
    })
})

module.exports = router
