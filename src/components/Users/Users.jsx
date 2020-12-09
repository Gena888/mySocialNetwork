import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';


let Users = ({
    followThunk, unfollowThunk, totalItemsCount,
    followingInProgress, usersData, pageSize,
    onPageChanged, currentPage, ...props }) => {



    return (
        <div>
            <Paginator
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}
            />

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