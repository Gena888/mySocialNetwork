import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = ({ status, updateStatusThunk, profile, isOwner, savePhotoThunk }) => {
    // debugger
    return (
        <div>
            <ProfileInfo
                savePhotoThunk={savePhotoThunk}
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatusThunk={updateStatusThunk} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
