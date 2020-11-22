import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';




const MyPosts = (props) => {

    let postsElement = props.postsData.map(postEl => <Post key={postEl.id} likes={postEl.likes} message={postEl.message} />)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            {postsElement}
            <div className={s.posts}>

            </div>
        </div>
    );
}

export default MyPosts;