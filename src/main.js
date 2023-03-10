const express = require('express')
const path = require('path')

const app = express()

// Setup
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./routes/pages.routes'))

// Static files
app.use(express.static(path.join(__dirname, '../public')))

// Listener
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'))
})
