const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const API_Version = "v24.10.17-1500a"

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// Home
app.get('/', function (req, res) {
    console.log("Home {GET}: [OK]")
    const fs = require('fs')
    try {
      const home = fs.readFileSync('src/index.html', 'utf8')
      res.status(200).send(home)
    } catch (err) {
      res.status(200).send('Error')
    }
})

// About
app.get('/about', function (req, res) {
    console.log("About {GET}: [OK]")
    const fs = require('fs')
    try {
      const about = fs.readFileSync('src/about.html', 'utf8')
      res.status(200).send(about)
    } catch (err) {
      res.status(200).send('Error')
    }
})

// Iniciar Servidor Web
app.listen(process.env.PORT || 4000, () => {
      console.log("Web Server "+API_Version)
      console.log('Servidor Corriendo el Puerto '+ (process.env.PORT || 4000))
})