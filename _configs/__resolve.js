const ROOT_PATH = process.cwd()

module.exports = {
    modules: [
        'node_modules', `${ROOT_PATH}/src`
    ],
    extensions: ['.js', '.jsx', '.json']
}
