import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch, useLocation } from 'react-router';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {
  const [isMobileMenuOpen, toggleMobileMenu] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Петя',
    email: 'haran@gmail.com',
    loggedIn: true,
    id: '96'
  });

  function handleMobileMenuOpen() {
    toggleMobileMenu(true);
  }

  function handleMobileMenuClose() {
    toggleMobileMenu(false);
  }

  const location = useLocation();
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          onOpen={handleMobileMenuOpen}
          path={location.pathname}
        />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies path={location.pathname}></Movies>
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies path={location.pathname}></SavedMovies>
          </Route>
          <Route path='/profile'>
            <Profile path={location.pathname}></Profile>
          </Route>
          <Route path='/signup'>
            <Register></Register>
          </Route>
          <Route path='/signin'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer 
          path={location.pathname}
        /> 
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
