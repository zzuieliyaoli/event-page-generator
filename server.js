'use strict';

const express = require('express')
const app = express()
const Busboy = require('busboy')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert')
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
    console.log('post')
    console.log(request.headers)
    
    var busboy = new Busboy({ headers: request.headers })
    console.log(busboy)
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log('yo--------------------')

        console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype)
        file.on('data', function(data) {
            console.log('File [' + fieldname + '] got ' + data.length + ' bytes')
        })
        file.on('end', function() {
            console.log('File [' + fieldname + '] Finished')
        })
    })

    busboy.on('finish', function() {
        console.log('Done parsing form!')
        response.writeHead(303, { Connection: 'close', Location: '/' })
        response.end()
    })

    request.pipe(busboy)

})

app.listen(5000, function() {
    console.log('Express server listening on port 5000')
})

MongoClient.connect(mongoServerUrl, function(err, db) {
    assert.equal(null, err)
    console.log("Connected correctly to server.")
    db.close()
})
