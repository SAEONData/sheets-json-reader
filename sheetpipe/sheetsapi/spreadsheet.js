let GoogleSpreadsheet = require('google-spreadsheet')
let creds = require('./client_secret.json')

let doc = new GoogleSpreadsheet('1mkcJSmxJJk6mM-Cv5dOiIikvaRqi6vezyCTm5a6atWI')

doc.useServiceAccountAuth(creds, function (err) {
  doc.getRows(1, function (err, rows) {
    console.log(rows)
  })
})