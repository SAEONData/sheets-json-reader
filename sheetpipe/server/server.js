var express = require('express')
var app = express()
var cors = require('cors')
// var { rows, doc } = require('./../api/spreadsheet')

/* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public'))
app.use(cors())


app.get('/', function (req, res) {
    res.send('hello saeon')
})

app.get('/spreadsheet', function(req, res) {
    let rows = require('./public/input')
    res.sendFile(__dirname + '/public/input.json')
    console.log(rows)
})



var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('computer says yes at http://%s:%s', host, port)
})
