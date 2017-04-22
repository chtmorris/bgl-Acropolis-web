const ROOT_PATH = process.cwd()

module.exports = {

    bail: true,
    cache: false,
    devtool: 'eval-source-map',

    entry: require('./__entry'),

    output: {
        path: `${ROOT_PATH}/public/scripts`,
        filename: '[name].js',
        publicPath: 'scripts/'
    },

    module: require('./__module'),
    plugins: require('./plugins'),
    resolve: require('./__resolve')

}
