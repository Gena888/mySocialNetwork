import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/store';



const MyPosts = (props) => {

    let postsElement = props.state.profilePage.postsData.map(postEl => <Post likes={postEl.likes} message={postEl.message} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.state.profilePage.newPostText} />
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