var express = require('express')
var app = express()
// var { rows, doc } = require('./../api/spreadsheet')

app.get('/', function (req, res) {
    res.send('hello saeon')
})

app.get('/spreadsheet', function(req, res) {
    let rows = require('./input')
    res.sendFile('/home/sheets-json-reader/sheetpipe/server/input.json')
    console.log(rows)
})



var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('computer says yes at http://%s:%s', host, port)
})