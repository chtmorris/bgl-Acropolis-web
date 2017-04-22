if (process.env.NODE_ENV === 'production') {
    module.exports = require('./_plugins.prod')

} else {
    module.exports = require('./_plugins.dev')

}
