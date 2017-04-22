import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import Layout from '_app/_base/components/layouts/Layout';
import NoMatch from '_app/_base/views/NoMatch';
import Nav from '_app/containers/Nav';
import Search from '_app/views/Search';

const Routes = [(<Route path='/404' component={NoMatch}/>), (
        <Route path='/' component={Layout}>
            <IndexRoute components={{
                nav: Nav,
                main: Search
            }}/>

            <Redirect from='/search' to='/'/>
            <Redirect from='*' to='/404'/>
        </Route>
    )];

export default Routes;
