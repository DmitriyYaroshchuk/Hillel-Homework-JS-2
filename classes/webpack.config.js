const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PostcssPresetEnv = require("postcss-preset-env");
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: [path.resolve(__dirname,'./src/js/index.js'), path.resolve(__dirname,'./src/styles/index.scss')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "js/[name].js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            //_________HTML_________//
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            //_________CSS, SASS, SCSS_________//
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [PostcssPresetEnv],
                            },
                        },

                    },
                    { loader: "sass-loader" },
                ],
            },
            //_________ JS _________//
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
            //_________ FONTS _________//
            {
                test: /\.woff2?$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name][ext]',
                }
            },
            //_________ IMAGES _________//
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],
                type: "asset/resource",
                generator: {
                    filename: 'images/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "./src/index.html")}),
        new MiniCssExtractPlugin({filename: 'styles/style.css'})
    ]
}