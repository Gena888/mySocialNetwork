import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

    let postsData = [
        { id: 1, likes: 121, message: 'hallow it.s me' },
        { id: 2, likes: 231, message: 'it is my firs post' },
        { id: 3, likes: 321, message: 'second post hear' }
    ]

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post likes={postsData[0].likes} message={postsData[0].message} />
                <Post likes={postsData[1].likes} message={postsData[1].message} />
                <Post likes={postsData[2].likes} message={postsData[2].message} />
            </div>
        </div>
    );
}

export default MyPosts;