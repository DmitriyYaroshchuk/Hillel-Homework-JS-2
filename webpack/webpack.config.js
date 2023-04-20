const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PostcssPresetEnv = require("postcss-preset-env");
module.exports = {
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "main.js"
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [PostcssPresetEnv],
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "./src/index.html")}),
        new MiniCssExtractPlugin({filename: 'style.css'})
    ]
}