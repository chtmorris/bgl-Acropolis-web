require('./_logging');

// injectTapEventPlugin
require('react-tap-event-plugin')();

// log environment properties
if (process.env.NODE_ENV === 'development') {
    debugger
    console.info('::process.env::', JSON.stringify(process.env, null, 4));
}

// hide splash screen
let classes = document.getElementsByTagName('body')[0].className;
classes = classes.replace(/loading/, '').trim();
document.getElementsByTagName('body')[0].className = classes;
