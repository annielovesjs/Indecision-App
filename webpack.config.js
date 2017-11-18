const path = require('path'); //build in node function -> access the modular code for path 


module.exports = {
    entry: './src/app.js', 
    output: {
        path: path.join(__dirname, 'public'), //__dirname contains the path to the current location -> indecisionapp current folder
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, //looking for any file that ends with .css ($) - ? makes the s optional so it runs both css and scss files
            use: [
                'style-loader',//when read a css file, dump content into these 2 
                'css-loader',
                'sass-loader' //use node sass to convert file into css 
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',  //shows error in original source code - makes debugging easier
    devServer: {
        contentBase: path.join(__dirname, 'public') // replacement for live server except with webpack features
    }
};