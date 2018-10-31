const fs = require('fs')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DEV_MODE = process.env.NODE_ENV === 'development'

const generatePagesConfig = (pagesDir) => {
    const PAGES_DIR = path.resolve(__dirname, pagesDir)
    let entry = {}
    let pageNames = []
    let pagesConfig = []

    fs.readdirSync(PAGES_DIR)
        .reduce((pagesConfig, fileName) => {
            entry[fileName] = path.resolve(PAGES_DIR, fileName, 'index.js')
            pageNames.push(fileName)
            pagesConfig.push(new HtmlWebpackPlugin({
                title: `${fileName} example`,
                template: './canvas.html',
                filename: `${fileName}.html`,
                chunks: ['vendors', `${fileName}`]
            }))

            return pagesConfig
        }, pagesConfig)

    return { entry, pageNames, pagesConfig }
}

const { entry, pageNames, pagesConfig } = generatePagesConfig('./examples')

module.exports = {
    entry,
    devtool: DEV_MODE ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: `[name].[chunkhash].js`,
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            pageLinks: pageNames.reduce((scripts, pageName) => {
                scripts = `${scripts}<li><a href="${pageName}.html">${pageName}.html</a></li>`
                return scripts
            }, ''),
            chunks: []
        }),
        ...pagesConfig
    ]
}
