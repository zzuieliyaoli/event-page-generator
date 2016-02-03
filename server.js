const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer().single('avatar')


const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const ObjectId = require('mongodb').ObjectID
const mongoServerUrl = 'mongodb://localhost:27017/test'

const api = {
    'uploadImg': '/api/uploadImg'
}

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.set('env', 'development')

app.get('/', function(request, response) {
    response.render('index', {
        'title': 'event page generator'
    })
})

app.post(api.uploadImg, function(request, response) {

    upload(request, response, function(err) {
        if (err) {
            throw new Error(err)

        }
        console.log(request.file)
            // Everything went fine
    })
        

})


app.listen(5000, function() {
    console.log('Express server listening on port 5000')
})

MongoClient.connect(mongoServerUrl, function(err, db) {
    assert.equal(null, err)
    console.log("Connected correctly to server.")
    db.close()
})
