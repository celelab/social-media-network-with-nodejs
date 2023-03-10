const router = require('express').Router()

router.get('/ingresar', (req, res) => {
    res.render('pages/auth')
})

router.get('/', (req, res) => {
    res.render('pages/home')
})

module.exports = router
