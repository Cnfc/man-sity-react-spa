import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import PrivateRoutes from './Components/authRoutes/privateRoutes';
import PublicRoutes from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {


  return(
    <Layout>
        <Switch>
            <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />

            <Route component={SignIn} path="/sign_in" />

            <Route component={Home} path="/"/>
            
        </Switch>
    </Layout>
  )
}

export default Routes;


