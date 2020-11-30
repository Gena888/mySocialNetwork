import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // debugger
        if (!userId) {
            userId = 2;
        }
        // this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps,
    {setUserProfile})(WithUrlDataContainerComponent);
    