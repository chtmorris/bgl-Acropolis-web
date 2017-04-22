const WS_BASE = 'http://localhost:3000'

const WS_SEARCH = `${WS_BASE}/search`

module.exports = {
    BASE_HREF: '/',
    'process.env': {
        'BASE_NAME': JSON.stringify('/'),
        'NODE_ENV': JSON.stringify('production'),
        'GA': JSON.stringify(['create', null, 'auto']),

        'WS_SEARCH': JSON.stringify(WS_SEARCH)
    }
}
