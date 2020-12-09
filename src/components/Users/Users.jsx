import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';


let Users = ({
    followThunk, unfollowThunk, totalUsersCount,
    followingInProgress, usersData, pageSize,
    onPageChanged, currentPage, ...props }) => {

    let pagesCount =
        Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator
                pages={pages}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />

            {usersData.map((u) =>
                <User
                    user={u}
                    followingInProgress={followingInProgress}
                    followThunk={followThunk}
                    unfollowThunk={unfollowThunk}
                />
            )}
        </div>
    )
}



export default Users;