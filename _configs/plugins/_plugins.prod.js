var webpack = require('webpack')
const SETTINGS = require('../../_settings')

module.exports = [
    function() {
        this.plugin('done', (stats) => {
            let assetsByChunkName = stats.toJson().assetsByChunkName
            require('./_functions').indexHtmlUpdateBaseHref(SETTINGS.BASE_HREF)
            require('./_functions').indexHtmlUpdateScriptsSrc(assetsByChunkName)
        })
    },
    new webpack.DefinePlugin({'process.env': SETTINGS['process.env']}),
    new webpack.LoaderOptionsPlugin({minimize: true}),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            screw_ie8: true,
            warnings: false
        },
        mangle: {
            screw_ie8: true
        },
        output: {
            comments: false,
            screw_ie8: true
        }
    })
]
