const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');

const compiler = webpack(webpackConfig)

compiler.run((err) => {
    if (err) {
        console.log('Compiler failed', err)
    }

    compiler.watch({}, (error) => {
        if (error) {
            console.log('Compiler failed', error)
        } else {
            console.log('Compitation was succesfully!')
        }
    })
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]
    })
})