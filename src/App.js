import React from 'react';

// import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/Header';
import MyCard from './components/MyCard';
import Cards from './components/Cards';

function App() {
  return (
    <div className='contain'>
      <Header />
      <MyCard />
      <Cards />
    </div>
  );
}

export default App;
