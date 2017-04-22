if (process.env.NODE_ENV === 'production') {
    module.exports = require('./_store.prod');
} else {
    module.exports = require('./_store.dev');
}
