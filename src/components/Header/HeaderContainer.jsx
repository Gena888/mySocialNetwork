import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { LogoutThunk } from './../../redux/auth-reducer';



class HeaderContainer extends React.Component {


    render() {
        // debugger
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    state: state.auth
})

export default connect(mapStateToProps,
    { LogoutThunk })(HeaderContainer);