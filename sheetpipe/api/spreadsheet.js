let GoogleSpreadsheet = require('google-spreadsheet')
let creds = require('./client_secret.json')
let fs = require('fs')

// specify google sheet id
let doc = new GoogleSpreadsheet('1WOn0gCd4jdJWRGVK28REgq8xWktzJV9S7ZF87BYZpxE')

// authorise and get rows
doc.useServiceAccountAuth(creds, function (err) {
  doc.getRows(1, function (err, rows) {
  
    fs.writeFile ("../server/public/input.json", JSON.stringify(rows), function(err){
      console.log(err, rows)
    })
  })
})


