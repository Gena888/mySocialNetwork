import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';




const App = (props) => {
  // debugger;
  return (
    <div className="app-wrapper">

      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Route path='/Profile' render={() => <Profile />} />
        <Route path='/Dialogs' render={() => <DialogsContainer />} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>

    </div>
  );
}



export default App;