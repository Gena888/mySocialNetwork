import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    return (

        <div className={s.posts}>
            my posts
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;