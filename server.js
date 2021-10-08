var express = require( 'express' )
const bodyParser = require("body-parser")
var app = express()
const path = require('path')


const publicDirectoryPath = path.join(__dirname, 'public')
app.use(express.static(publicDirectoryPath))
app.use(bodyParser.json())

app.get('/', function(request, response) {
    response.sendFile( __dirname + '/views/index.html' )
})

app.listen(process.env.PORT || 3000)
