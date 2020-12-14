import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = ({
    status, updateStatusThunk, profile,
    isOwner, savePhotoThunk, saveProfileThunk, isValidInput }) => {
    return (
        <div>
            <ProfileInfo
                saveProfileThunk={saveProfileThunk}
                savePhotoThunk={savePhotoThunk}
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatusThunk={updateStatusThunk}
                isValidInput={isValidInput}
            />
            {isOwner && <MyPostsContainer profile={profile}/>}
        </div>
    );
}

export default Profile;
