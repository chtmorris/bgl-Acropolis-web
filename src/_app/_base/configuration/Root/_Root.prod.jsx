import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import Routes from '_app/routes';
import {handleRouterUpdate} from './__functions';

export default class Root extends React.Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store={store}>
                <Router history={history} routes={Routes} onUpdate={handleRouterUpdate}/>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
};
