const WS_BASE = 'http://localhost:3000'

const WS_SEARCH = `${WS_BASE}/search`

module.exports = {
    BASE_HREF: '/',
    'process.env': {
        'BASE_NAME': JSON.stringify('/'),
        'HOST': JSON.stringify(process.env.HOST),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'GA': JSON.stringify(['create', null, 'auto']),

        'WS_SEARCH': JSON.stringify(WS_SEARCH)
    }
}
