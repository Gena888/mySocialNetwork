import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import { setUserProfileData } from './../../redux/auth-reducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                // debugger
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, login, email);

                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + response.data.data.id)
                        .then(response => {
                            // debugger;
                            // this.props.setToggleFetching(false);
                            this.props.setUserProfileData(response.data);
                        });

                }

            });
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