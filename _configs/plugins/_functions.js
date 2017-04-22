const fs = require('fs')
const path = require('path')
const PATH_TO_ROOT = process.cwd()
const PATH_TO_INDEX_FILE = path.join(PATH_TO_ROOT, 'public/index.html')

module.exports = {

    indexHtmlUpdateBaseHref: function(baseHref) {
        let content = fs.readFileSync(PATH_TO_INDEX_FILE, 'utf8')
        let re = new RegExp('<base href=".*">')
        content = content.replace(re, `<base href="${baseHref}">`)
        fs.writeFileSync(PATH_TO_INDEX_FILE, content, 'utf8')
    },

    indexHtmlUpdateScriptsSrc: function(assetsByChunkName) {
        let content = fs.readFileSync(PATH_TO_INDEX_FILE, 'utf8')
        Object.keys(assetsByChunkName).forEach(asset => {
            let re = new RegExp(`${asset}.*\.js`)
            content = content.replace(re, assetsByChunkName[asset])
        })
        fs.writeFileSync(PATH_TO_INDEX_FILE, content, 'utf8')
    }

}
