var path = require('path')
var webpack = require('webpack')
var node_modules = path.resolve(__dirname, 'node_modules')
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js')

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
        extensions: ['', '.jsx', '.js'],
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDom
        }
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
