const log = require('./__log')
const execSync = require('child_process').execSync

log.info('(@@_scripts/reset) cleaning project')
require('./clean')(true, true)

log.info('(@@_scripts/reset) installing dependencies')
execSync('yarn install')
execSync('bower install')
