import { connect } from 'react-redux';
import React from 'react';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching } from './../../redux/users-reducer';
import * as axios from 'axios';
import UsersFunctionalComp from './UsersFunctionalComp';
import Preloader from '../Common/Preloader/Preloader';


// классовая компанента выполняющая ajax запросы и рендерящая функциональную
// компаненту, передавая в её пропсы необходимую инфу.

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render = () => {
        return (
            <>

                {this.props.isFetching ? <Preloader/> : null}

                <UsersFunctionalComp
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersData={this.props.usersData}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                // ifFetching={this.props.usersPage.isFetching}
                />
            </>)
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
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}




export default connect(mapStateToProps, 
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching})(UsersContainer);

    // теперь не передаем mapDispatchToProps В коннект, вместо него просто передаём
    // обьект со свойствами: action: action записывая просто как action. 