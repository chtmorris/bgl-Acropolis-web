if (process.env.NODE_ENV === 'production') {
    module.exports = require('./_production.build')

} else if (process.env.GH_BRANCH === 'development-build') {
    module.exports = require('./_development.build')

} else {
    module.exports = require('./_development')

}
