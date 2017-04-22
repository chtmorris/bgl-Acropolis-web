import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import Layout from '_app/_base/components/layouts/Layout';
import NoMatch from '_app/_base/views/NoMatch';
import Nav from '_app/containers/Nav';
import Home from '_app/views/Home/components';
import Profile from '_app/views/Profile/components';

const Routes = [(<Route path='/404' component={NoMatch}/>), (
        <Route path='/' component={Layout}>
            <IndexRoute components={{
                nav: Nav,
                main: Home
            }}/>

            <Route path="profile" components={{
                nav: Nav,
                main: Profile
            }}/>

            <Redirect from='/home' to='/'/>
            <Redirect from='*' to='/404'/>
        </Route>
    )];

export default Routes;
