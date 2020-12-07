import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileDataThunk, setUserProfile, updateStatusThunk, getStatusThunk } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../Hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorisedUserId;
            debugger
            if (!userId) {
                this.props.history.push('/Login')
            }
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
    status: state.profilePage.status,
    autorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})



export default compose(
    connect(mapStateToProps, { setUserProfile, getProfileDataThunk, updateStatusThunk, getStatusThunk }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)