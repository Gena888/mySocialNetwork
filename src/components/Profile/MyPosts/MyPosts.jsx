import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator, required } from './../../../Utils/Validators/Validaors';
import { Textarea } from './../../Common/FormsControls/FormsControls';




const MyPosts = (props) => {

    let postsElement = props.postsData.map(postEl => <Post key={postEl.id} likes={postEl.likes} message={postEl.message} />)

    let onAddNewPost = (values) => {
        props.addPost(values.newTextBody)
    }

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>

            <ReduxAddPost onSubmit={onAddNewPost} />

            {postsElement}
            <div className={s.posts}>

            </div>
        </div>
    );
}

const maxLength = maxLengthCreator(10);


const addPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength]}
                component={Textarea} name={'newTextBody'}
                placeholder={'Enter your message'} />
            <button>add post</button>
        </form>
    )
}

const ReduxAddPost = reduxForm({
    form: 'newPost'
})(addPost)




export default MyPosts;