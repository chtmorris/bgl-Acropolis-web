import {useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const BASE_NAME = process.env.BASE_NAME;

export default function sync(store) {
    let createHistory = useRouterHistory(createBrowserHistory);
    let browserHistory = createHistory({basename: BASE_NAME});
    return syncHistoryWithStore(browserHistory, store);
};
