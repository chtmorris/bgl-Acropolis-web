const opn = require('opn')
const http = require('http')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const log = require('./__log')

const CONFIG = require('../_configs/webpack.config')
const PORT = process.env.PORT || 8080
const HOSTNAME = process.env.HOSTNAME || '0.0.0.0'

let app = express()
let server = http.createServer(app)
let compiler = webpack(CONFIG)

server.listen(PORT, HOSTNAME, function(err) {
    log.info(`(@@_scripts/start) loading app on port ${PORT}`)
    if (err) {
        log.error('(@@_scripts/start) error on server', err)
    }
})

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/scripts/',
    stats: {
        colors: true
    }
}))

app.use(express.static('public'))

app.get('*', (req, res, next) => {
    let rootpath = process.cwd()
    res.sendFile(`${rootpath}/public/index.html`)
})

opn(`http://localhost:${PORT}`)
