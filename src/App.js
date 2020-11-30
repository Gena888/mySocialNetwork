import React, { Component } from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




const App = (props) => {
  // debugger;
  return (
    <div className="app-wrapper">

      <HeaderContainer />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/Dialogs' render={() => <DialogsContainer />} />
        <Route path='/Users' render={() => <UsersContainer/>} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>

    </div>
  );
}



export default App;