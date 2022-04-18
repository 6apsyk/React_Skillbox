const path = require('path');

//для запуска без express
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

function setDevtools() {
    if (IS_DEV) return 'eval'
    if (IS_PROD) return false
}

module.exports = {

    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist/client'),
    },
    module: {
        rules: [{ test: /\.[tj]sx$/, use: ['ts-loader'] }],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
    devtool: setDevtools(),

    // Для запуска без express

    // plugins: [
    //     new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    // ],

    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: IS_DEV
    // }

}