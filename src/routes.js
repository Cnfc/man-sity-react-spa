import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route component={Dashboard} path="/dashboard" />
            <Route exact component={Home} path="/"/>
            <Route component={SignIn} path="/sign_in" />
            
        </Switch>
    </Layout>
  )
}

export default Routes;


