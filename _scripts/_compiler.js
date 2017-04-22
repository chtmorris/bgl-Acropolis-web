const log = require('./__log')
const webpack = require('webpack')

module.exports = (config) => new Promise((resolve, reject) => {

    log.info('(@@_scripts/_compiler) compiling project')
    let compiler = webpack(config)
    compiler.run((err, stats) => {

        if (err) {

            let message = '(@@_scripts/_compiler) failed to build project'
            if (err.details) {
                message = `${message}\n\t::details::\n\t${err.details}`
            }
            log.error(message, err)
            reject(err)

        } else {

            const info = stats.toJson()

            if (stats.hasErrors() || stats.hasWarnings()) {

                if (stats.hasErrors()) {
                    log.error('(@@_scripts/_compiler) compile errors emitted', info)
                    log.error(stats.toString({minimal: true, colors: true}), info.errors)
                }

                if (stats.hasWarnings()) {
                    log.warn('(@@_scripts/_compiler) compile warnings emitted')
                    log.warn(stats.toString({minimal: true, colors: true}))
                }

                reject(info)

            } else {
                log.info('(@@_scripts/_compiler) project has been build')
                log.info(stats.toString({minimal: true, colors: true}))
                resolve(info)
            }

        }

    })

})
