import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
      </Route>
      
    </div>
  );
}

export default App;
