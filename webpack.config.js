const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ // for js
            loader: 'babel-loader', //allows only one loader, use for more loaders
            test: /\.js$/,
            exclude: /node_modules/
        }, { // for scss
            test: /\.s?css$/, // s is optional either css or scss
            use: ['style-loader', 'css-loader', 'sass-loader'] // use for array of loaders
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}