import React, { Component } from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';


class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">

        <HeaderContainer />
        <NavContainer />
        <div className='app-wrapper-content'>
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Login' render={() => <Login />} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})



export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
