const compiler = require('./_compiler')

const run = module.exports = () => new Promise((resolve, reject) => {

    require('./clean')()

    const CONFIG = require('../_configs/webpack.config')
    compiler(CONFIG).then(() => {
        resolve()
    }).catch(err => {
        reject(err)
    })

})

if (require.main === module) {
    run().catch(err => {
        return process.exit(1)
    })
}
