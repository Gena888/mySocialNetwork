import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.postsBlock} >
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>

            <div className={s.posts}>
                <Post likes="2" message="hallow it.s me" />
                <Post likes="3" message="it is my firs post" />
                <Post likes="1" message="second post hear" />
            </div>
        </div>
    );
}

export default MyPosts;