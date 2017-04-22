const logging = require('@jbarinas/logging').default
const ConsoleHandler = require('@jbarinas/logging-console').ConsoleHandler

let log = module.exports = logging.getLogger('react-app-compiler')
log.addHandler(new ConsoleHandler())
log.setLevel(logging.logLevel.debug)
