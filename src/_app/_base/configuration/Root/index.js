if (process.env.NODE_ENV === 'production') {
    module.exports = require('./_Root.prod').default;

} else {
    module.exports = require('./_Root.dev').default;

}
