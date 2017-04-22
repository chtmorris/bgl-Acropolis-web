const webpack = require('webpack')
const SETTINGS = require('../../_settings')

module.exports = [
    function() {
        this.plugin('done', (stats) => {
            let assetsByChunkName = {
                _app: '_app.js',
                _libs: '_libs.js',
                _stylesheets: '_stylesheets.js'
            }
            require('./_functions').indexHtmlUpdateBaseHref(SETTINGS.BASE_HREF)
            require('./_functions').indexHtmlUpdateScriptsSrc(assetsByChunkName)
        })
    },

    new webpack.DefinePlugin({'process.env': SETTINGS['process.env']}),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
]
