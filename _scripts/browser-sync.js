const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const browserSync = require('browser-sync').create()

const log = require('./__log')
const compiler = require('./_compiler')

const CONFIG = require('../_configs/webpack.config')
const PATH_TO_SRC = path.join(process.cwd(), '/src')

compiler(CONFIG).catch(err => {});

log.info('(@@_scripts/browser-sync) loading app')
browserSync.init({
    server: {
        baseDir: "public",
        index: "index.html"
    }
})

fs.watch(PATH_TO_SRC, {
    recursive: true
}, (() => {
    return _.debounce(() => {
        compiler(CONFIG).then(() => {
            log.info('(@@_scripts/browser-sync) re-loading app')
            browserSync.reload()
        }).catch(err => {
            let message = ""
            message += "<div>:: error on compilation ::</div>"
            message += "<div>check console messages for more details</div>"

            let style = "background-color:#F44336; color:#FFF; margin:-15px; padding:15px; font-weight:500;"

            browserSync.notify(`<div style='${style}'>${message}</div>`, 5000)
        })
    }, 200)
})())
