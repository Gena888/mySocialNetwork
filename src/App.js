import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';




const App = (props) => {
// debugger;
  return (
    <div className="app-wrapper">

      <Header />
      <Nav state={props.state} />
          <div className='app-wrapper-content'>
        <Route path='/Profile'
          render={() => <Profile state={props.state} dispatch={props.dispatch}/>} />
        <Route path='/Dialogs'
          render={() => <Dialogs state={props.state}  />} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>

    </div>
  );
}



export default App;