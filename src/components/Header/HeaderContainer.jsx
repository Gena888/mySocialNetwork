import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import { setUserProfileData } from './../../redux/auth-reducer';
import { API } from '../../api/api';


class HeaderContainer extends React.Component {

    componentDidMount() {
        API.authMe(this.props.setAuthUserData, this.props.setUserProfileData)
    }

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
    { setAuthUserData, setUserProfileData })(HeaderContainer);