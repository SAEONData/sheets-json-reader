let GoogleSpreadsheet = require('google-spreadsheet')
let creds = require('./client_secret.json')
let fs = require('fs')


let doc = new GoogleSpreadsheet('1mkcJSmxJJk6mM-Cv5dOiIikvaRqi6vezyCTm5a6atWI')

doc.useServiceAccountAuth(creds, function (err) {
  doc.getRows(1, function (err, rows) {
    console.log(rows)
    fs.writeFile ("../server/public/input.json", JSON.stringify(rows), function(err){
      console.log(err, 'rowsworks')
    })
  })
}) 