import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';



const MyPosts = (props) => {

    let postsElement = props.postsData.map(postEl => <Post likes={postEl.likes} message={postEl.message} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            {postsElement}
            <div className={s.posts}>

            </div>
        </div>
    );
}

export default MyPosts;