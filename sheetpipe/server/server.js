var express = require('express')
var app = express()
var { rows, doc }= require('./../sheetsapi/spreadsheet')

app.get('/', function (req, res) {
    res.send('hello saeon')
})

app.get('/spreadsheet', function(req, res) {
    res.send(doc)
    console.log(doc)
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('computer says yes at http://%s:%s', host, port)
})