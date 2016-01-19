const express = require('express')
const app = express()

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



// "build": "webpack",
//     "dev": "webpack-dev-server --port 14444 --devtool eval --progress --profile --colors --hot --content-base build",
//     "deploy": "NODE_ENV=production webpack -p --config webpack.production.config.js",