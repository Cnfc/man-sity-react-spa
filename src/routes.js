import React, { Component } from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from  'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';

import Home from './Components/home';
import SighIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>

        <PrivateRoute {...props} path="dashboard" exact component={Dashboard}/>
        <Route exact component={SighIn} path='/sign_in'/>
        <Route exact component={Home} path='/'/>

      </Switch>

    </Layout>
  )
}

export default Routes;
