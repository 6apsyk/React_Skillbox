import express from 'express'
// const express = require('express')
import ReactDOM from 'react-dom/server'
// const ReactDom = require('react-dom/server')
import Header from '../shared/Header.jsx'
import { indexTemplate } from './indexTemplate.js'

const app = express()
const port = 3000

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(Header())))
})

// app.set('port', process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`App listening on port 3000`)
})