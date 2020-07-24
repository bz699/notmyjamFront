import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import Profile from './components/Profile';
import Cards from './components/Cards';

function App() {
  return (
    <div className='contain'>
      <Header />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Cards} />
        {/* Créer un signup */}
        <PrivateRoute path="/myprofile" component={Profile} />
      </Switch>

    </div>
  );
}

export default App;
