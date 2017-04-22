if (process.env.NODE_ENV === 'production') {
    module.exports = require('./_webpack.config.prod')

} else {
    module.exports = require('./_webpack.config.dev')

}
