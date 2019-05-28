let GoogleSpreadsheet = require('google-spreadsheet')
let creds = require('./client_secret.json')

let doc = new GoogleSpreadsheet('12auwsGfYpDpGNjPmgVCqGAZnhdYSCe0U2dPc0OWwehQ')

doc.useServiceAccountAuth(creds, function (err){
  doc.getRows(1, function (err, rows) {
    console.log(rows)
  })
})