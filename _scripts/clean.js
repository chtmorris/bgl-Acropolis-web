const path = require('path')
const rimrafSync = require('rimraf').sync

const PATH_TO_BUILD = path.join(process.cwd(), '/public/scripts')
const PATH_TO_YARN_DEPS = path.join(process.cwd(), '/node_modules')
const PATH_TO_BOWER_DEPS = path.join(process.cwd(), '/public/bower-components')
const PATH_TO_GH_PAGES_CACHE = path.join(process.cwd(), '/node_modules/gh-pages/.cache')

const log = require('./__log')

const run = module.exports = (cleanDeps = false, cleanBuild = true) => {
    rimrafSync(PATH_TO_GH_PAGES_CACHE)

    if (cleanDeps) {
        log.info('(@@_scripts/clean) cleaning dependencies')
        rimrafSync(PATH_TO_YARN_DEPS)
        rimrafSync(PATH_TO_BOWER_DEPS)
    }

    if (cleanBuild) {
        log.info('(@@_scripts/clean) cleaning builds')
        rimrafSync(PATH_TO_BUILD)
    }

}

if (require.main === module) {
    run()
}
