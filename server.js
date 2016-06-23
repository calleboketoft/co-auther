var port = 3008
var staticDir = './'
var express = require('express')
var app = express()
app.use(express.static(staticDir))
var server = app.listen(port, () => {
  console.log('serving at: ' + port)
})