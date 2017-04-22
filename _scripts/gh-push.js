const log = require('./__log')

require('./build')().then(stats => {
    var path = require('path')
    var ghpages = require('gh-pages')

    const basePath = path.join(process.cwd(), '/public')

    ghpages.publish(basePath, {

        branch: process.env.GH_BRANCH,
        dotfiles: false,
        message: 'build(all)',
        push: true,
        remote: 'origin',
        tag: '',

        user: {
            name: '',
            email: ''
        },

        //add: false,
        //clone: '',
        //git: 'git',
        //repo: '',
        //silent: false,
        //src: '**/*',

        logger: function(msg) {
            log.debug(msg)
        }

    },
    // callback
    (err) => {
        if (err) {
            log.error('(@@scripts/gh-push) push to github failed', err)
            process.stderr.write(err.message + '\n')
            return process.exit(1)
        }
        log.info('(@@scripts/gh-push) push to github succeeded')
    })
}).catch(err => {
    log.error('(@@scripts/gh-push) push to github failed', err)
    return process.exit(1)
})
