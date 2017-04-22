import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import DevTools from '_app/_base/configuration/DevTools';
import Routes from '_app/routes';
import {handleRouterUpdate} from './__functions';

export default class Root extends React.Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={Routes} onUpdate={handleRouterUpdate}/>
                    <DevTools/>
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
};
