import { connect } from 'react-redux';
import React from 'react';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from './../../redux/users-reducer';
import * as axios from 'axios';
import UsersFunctionalComp from './UsersFunctionalComp';

// классовая компанента выполняющая ajax запросы и рендерящая функциональную
// компаненту, передавая в её пропсы необходимую инфу.

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render = () => {


        return <UsersFunctionalComp
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersData={this.props.usersData}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />

    }
}

// контейнерная вторая компанента которая получается в результате
// оборачивания первой компаненты(connect). принимает данные у state 
// и передаёт их в props API компаненте по средствам CONNECT-а 

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => { 
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);