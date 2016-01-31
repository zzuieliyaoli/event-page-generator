const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.set('env', 'development')

app.get('/', function (req, res) {
  res.render('index', {'title': 'event page generator'})
})

app.listen(5000, function() {
    console.log('Express server listening on port 5000')
})

const url = 'mongodb://localhost:27017/test'
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err)
  console.log("Connected correctly to server.")
  db.close()
})