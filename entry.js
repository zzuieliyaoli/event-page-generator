var path = require('path')
module.exports = {
    entry: './entry.js',
    ouput: {
        path: path.join(__dirname. 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{ test: /\.js|jsx$/, loaders: ['babel'] }]
    }
}
