import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileDataThunk, setUserProfile, updateStatusThunk, getStatusThunk } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { withAuthRedirect } from './../../Hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12852;
        }
        this.props.getProfileDataThunk(userId);
        this.props.getStatusThunk(userId);


    }

    render() {
        return (
            <div>

                <Profile {...this.props} profile={this.props.profile}
                    status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />

            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})



export default compose(
    connect(mapStateToProps, { setUserProfile, getProfileDataThunk, updateStatusThunk, getStatusThunk }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)