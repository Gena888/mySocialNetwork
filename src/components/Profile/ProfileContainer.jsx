import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { API } from '../../api/api';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // debugger
        if (!userId) {
            userId = 2;
        }
        // this.props.setToggleFetching(true);

        API.getProfileData(userId, this.props.setUserProfile)
        
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
    { setUserProfile })(WithUrlDataContainerComponent);
