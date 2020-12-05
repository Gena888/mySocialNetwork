import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';




const MyPosts = (props) => {

    let postsElement = props.postsData.map(postEl => <Post key={postEl.id} likes={postEl.likes} message={postEl.message} />)

    let onAddNewPost = (values) => {
        props.addPost(values.newTextBody)
    }

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>

            <ReduxAddPost onSubmit={onAddNewPost}/>
        
            {postsElement}
            <div className={s.posts}>

            </div>
        </div>
    );
}


const addPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newTextBody'} placeholder={'Enter your message'} />
            <button>add post</button>
        </form>
    )
}

const ReduxAddPost = reduxForm({
    form: 'newPost'
})(addPost)




export default MyPosts;