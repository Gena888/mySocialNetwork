import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataThunk } from './../../redux/auth-reducer';



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setUserDataThunk()
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
    { setUserDataThunk })(HeaderContainer);