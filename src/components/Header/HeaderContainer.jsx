import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { LogoutThunk, getUserDataThunk } from './../../redux/auth-reducer';



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserDataThunk()
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
    { getUserDataThunk, LogoutThunk })(HeaderContainer);