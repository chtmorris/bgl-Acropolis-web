const ROOT_PATH = process.cwd()

let entries = module.exports = {
    _app: `${ROOT_PATH}/src/_app/main.js`,
    _libs: `${ROOT_PATH}/src/_libs/main.js`,
    _stylesheets: `${ROOT_PATH}/src/_stylesheets/main.js`
}

if (process.env.NODE_ENV === 'production') {} else {
    entries._app = ['react-hot-loader/patch'].concat(entries._app)
}
