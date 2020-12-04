import { connect } from 'react-redux';
import React from 'react';
import { setCurrentPage, getUsersThunk, unfollowThunk, followThunk } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from './../../Hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render = () => {
        return (
            <>

                {this.props.isFetching ? <Preloader /> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersData={this.props.usersData}
                    followingInProgress={this.props.followingInProgress}
                    unfollowThunk={this.props.unfollowThunk}
                    followThunk={this.props.followThunk}

                />
            </>)
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}





export default compose(
    connect(mapStateToProps, { setCurrentPage, getUsersThunk, unfollowThunk, followThunk }),
    withAuthRedirect
)(UsersContainer)