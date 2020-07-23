import React from 'react';
import {Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Cards from './components/Cards';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <div className='contain'>
      <Header />
      <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/profile" component={Profile} />
      </Switch>

    </div>
  );
}

export default App;
