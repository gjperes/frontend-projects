// Main configuration file, setting Express configuration

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.render('notfound')
})

app.listen(8080, function() {
    console.log('Server listening...')
})