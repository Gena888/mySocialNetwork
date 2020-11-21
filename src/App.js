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




const App = (props) => {
// debugger;
  return (
    <div className="app-wrapper">

      <Header />
      <Nav state={props.state} />
          <div className='app-wrapper-content'>
        <Route path='/Profile'
          render={() => <Profile state={props.state} dispatch={props.dispatch} store={props.store}/>} />
        <Route path='/Dialogs'
          render={() => <DialogsContainer store={props.store}/>} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>

    </div>
  );
}



export default App;