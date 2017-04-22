import logging from '@jbarinas/logging';
//import {setupStore} from '@jbarinas/logging-redux';
import {ConsoleHandler} from '@jbarinas/logging-console';

let rootlog = logging.getLogger();
rootlog.setLevel(logging.logLevel.info);
//setupStore(rootlog);

let log = logging.getLogger('app');
log.addHandler(new ConsoleHandler());

if (process.env.NODE_ENV === 'development') {
    log.setLevel(logging.logLevel.debug);
} else {
    log.setLevel(logging.logLevel.info);
}

window._logging = logging;
