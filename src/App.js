import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">

      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='Profile' component='Dialogs' />
        <Route path='Messages' component='Profile' />


      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;