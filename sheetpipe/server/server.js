var express = require('express')
var app = express()
var cors = require('cors')


/* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public'))
app.use(cors())


app.get('/', function (req, res, next) {
    res.send('hello saeon')
})

app.get('/spreadsheet', function(req, res, next) {
   
    // let rows = require('./../api/spreadsheet')
    let rows = require(__dirname + '/' + 'public' + '/' + 'input.json')
    res.sendFile(__dirname + '/' + 'public' + '/' + 'input.json')
//    console.log(rows)}
    
    
})



var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('computer says yes at http://%s:%s', host, port)
})
