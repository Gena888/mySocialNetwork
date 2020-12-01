import { connect } from 'react-redux';
import React from 'react';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching } from './../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { API } from '../../api/api';


// классовая компанента выполняющая ajax запросы и рендерящая функциональную
// компаненту, передавая в её пропсы необходимую инфу.

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.setToggleFetching(true);
        API.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                this.props.setToggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        API.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleFetching(false);
                this.props.setUsers(data.items);
            });
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
    { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching })(UsersContainer);

    // теперь не передаем mapDispatchToProps В коннект,
    // вместо него просто передаём
    // обьект со свойствами: action: action записывая просто как action. 