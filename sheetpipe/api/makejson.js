var fs = require('fs');
var rows = require('./spreadsheet')

var data = {rows}

fs.writeFile ("input.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('checkit');
    }
);