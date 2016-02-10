'use strict'

const express = require('express')
const app = express()
const Busboy = require('busboy')
const mongodb = require('mongodb')
const db = new mongodb.Db('test', new mongodb.Server('127.0.0.1', 27017))
const Grid = require('gridfs-stream')
const MongoClient = mongodb.MongoClient
const assert = require('assert')

// test whether connect mongo server 
const mongoServerUrl = 'mongodb://localhost:27017/test'
MongoClient.connect(mongoServerUrl, function(err, db) {
    assert.equal(null, err)
    console.log("Connected correctly to server.")
    db.close()
})

const gfs
db.open(function(err, db) {
    if (err) {
        throw err
    }
    gfs = Grid(db, mongodb)
})

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

    let busboy = new Busboy({
        headers: request.headers
    })

    let fileId = new mongodb.ObjectId()

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log('got file', filename, mimetype, encoding)
        let writeStream = gfs.createWriteStream({
            _id: fileId,
            filename: filename,
            mode: 'w',
            content_type: mimetype,
        })

        file.pipe(writeStream)
    })

    busboy.on('finish', function() {
        console.log('Done parsing form!')
        console.log('fileId is', fileId)
        response.writeHead(303, {
            Connection: 'close',
            Location: '/'
        })
        response.end()
    })

    request.pipe(busboy)
})

app.get('/file/:id', function(reqquest, response) {
    gfs.findOne({
        _id: reqquest.params.id
    }, function(err, file) {
        if (err) return response.status(400).send(err)
        if (!file) return response.status(404).send('')

        response.set('Content-Type', file.contentType)
        response.set('Content-Disposition', 'attachment filename="' + file.filename + '"')

        let readstream = gfs.createReadStream({
            _id: file._id
        })

        readstream.on("error", function(err) {
            console.log("Got error while processing stream " + err.message)
            response.end()
        })

        readstream.pipe(response)
    })
})

app.listen(5000, function() {
    console.log('Express server listening on port 5000')
})
