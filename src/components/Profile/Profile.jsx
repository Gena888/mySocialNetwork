import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = ({ status, updateStatusThunk, profile }) => {
    // debugger
    return (
        <div>
            <ProfileInfo profile={profile}
                status={status} updateStatusThunk={updateStatusThunk} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
