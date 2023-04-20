const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "./src/index.html")}),
    ]
}