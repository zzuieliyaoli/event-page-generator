var path = require('path')
var webpack = require('webpack')
var node_modules = path.resolve(__dirname, 'node_modules')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        vendors: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react','es2015']
            },
            exclude: /node_modules/
        }, {
          test: /\.scss$/, // Only .css files
          loader: 'style!css!sass' // Run both loaders
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
}
