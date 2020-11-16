import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../../redux/state';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
