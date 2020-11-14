import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';



const MyPosts = (props) => {

    // let postsData = [
    //     { id: 1, likes: 121, message: 'hallow it.s me' },
    //     { id: 2, likes: 231, message: 'it is my firs post' },
    //     { id: 3, likes: 321, message: 'second post hear' }
    // ]

    let postsElement = props.postsData.map(postEl => <Post likes={postEl.likes} message={postEl.message} />)

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
            {postsElement}
            <div className={s.posts}>

            </div>
        </div>
    );
}

export default MyPosts;