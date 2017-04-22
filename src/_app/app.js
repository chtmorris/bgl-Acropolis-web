import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '_app/_base/configuration/Root';
import store from '_app/_base/configuration/store';
import syncHistoryWithStore from '_app/_base/configuration/syncHistoryWithStore';

const history = syncHistoryWithStore(store);

const render = (Component) => {
    const muiTheme = getMuiTheme();

    let container = (
        <AppContainer>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Component store={store} history={history}/>
            </MuiThemeProvider>
        </AppContainer>
    );
    ReactDOM.render(container, document.getElementById('app'));
};

render(App);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('_app/_base/configuration/Root', () => {
            render(App);
        });
    }
}
