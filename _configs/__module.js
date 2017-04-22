var path = require('path')
const ROOT_PATH = process.cwd()

module.exports = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'eslint-loader',
            enforce: 'pre',
            include: [
                path.join(ROOT_PATH, 'src/_app'),
                path.join(ROOT_PATH, 'src/_libs'),
                path.join(ROOT_PATH, 'src/_stylesheets')
            ]
        }, {
            test: /\.jsx?$/,
            use: 'babel-loader',
            include: [
                path.join(ROOT_PATH, 'src/_app'),
                path.join(ROOT_PATH, 'src/_libs'),
                path.join(ROOT_PATH, 'src/_stylesheets')
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            ],
            include: path.join(ROOT_PATH, 'src/_app')
        }, {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ],
            include: path.join(ROOT_PATH, 'src/_stylesheets')
        }
    ]
}
