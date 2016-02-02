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
    response.json({
        'message': 'image upload2'
    })
    upload(request, response, function(err) {
            if (err) {
                throw new Error(err)

            }
            console.log(request)
                // Everything went fine
        })
        // MongoClient.connect(mongoServerUrl, function(err, db) {
        //     assert.equal(null, err)
        //     db.collection('restaurants').insertOne({
        //         "address": {
        //             "street": "2 Avenue",
        //             "zipcode": "10075",
        //             "building": "1480",
        //             "coord": [-73.9557413, 40.7720266]
        //         },
        //         "borough": "Manhattan",
        //         "cuisine": "Italian",
        //         "grades": [{
        //             "date": new Date("2014-10-01T00:00:00Z"),
        //             "grade": "A",
        //             "score": 11
        //         }, {
        //             "date": new Date("2014-01-16T00:00:00Z"),
        //             "grade": "B",
        //             "score": 17
        //         }],
        //         "name": "Vella",
        //         "restaurant_id": "41704620"
        //     }, function(err, result) {
        //         assert.equal(err, null);
        //         console.log("Inserted a document into the restaurants collection.");
        //     });
        // })

})


app.listen(5000, function() {
    console.log('Express server listening on port 5000')
})

MongoClient.connect(mongoServerUrl, function(err, db) {
    assert.equal(null, err)
    console.log("Connected correctly to server.")
    db.close()
})
