const path = require('path')
const webpack = require('webpack')
const node_modules = path.resolve(__dirname, 'node_modules')

module.exports = {
    entry: [
        'webpack/hot/only-dev-server', 
        'webpack-dev-server/client?http://localhost:14444',
        './app/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "http://localhost:14444/public/"
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.js|jsx?$/,
            loader: ['babel'],
            query: {
                presets: ['react','es2015']
            },
            exclude: /node_modules/
        }, {
          test: /\.scss$/, // Only .css files
          loader: 'style!css!sass' // Run both loaders
        }],
        // noParse: [pathToReact, pathToReactDom]
    }
    
}
