import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';


class ProfileContainer extends React.Component {

    componentDidMount() {
        // this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.setToggleFetching(false);
                this.props.setUserProfile(response.data);
            });

    }

    render() {
        return (
            <div>

                <Profile {...this.props} profile={this.props.profile} />

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps,
    {setUserProfile})(ProfileContainer);