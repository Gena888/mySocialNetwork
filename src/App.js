import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import store from './redux/redux-store';
import { withSuspense } from './Hoc/withSuspense';

const Music = React.lazy(() => import('./components/Music/Music'))
const Login = React.lazy(() => import('./Login/Login'))


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
          <Route path='/Music' render={withSuspense(Music)} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Login' render={() => { return <React.Suspense fallback={<Preloader />}> <Login /> </React.Suspense> }} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJsApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}


export default SamuraiJsApp; 