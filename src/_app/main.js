require('_app/_base/init');

let browser = require('@jbarinas/browser-detection');
if (browser.name === 'Chrome') {
    require('./app');
} else {
    require('./_base/views/BrowserNotSupported');
}
