var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js')

module.exports = {
    entry: [
        'webpack/hot/dev-server', 
        path.resolve(__dirname, 'app/main.js')
    ],
    resolve: {
        alias: {
          'react': pathToReact,
          'react-dom': pathToReactDom
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
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
        }],
        // noParse: [pathToReact, pathToReactDom]
    }
}
