import React, { PureComponent } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator, required } from './../../../Utils/Validators/Validaors';
import { Textarea } from './../../Common/FormsControls/FormsControls';
import { render } from '@testing-library/react';



class MyPosts extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state
    // } ЭТА ЛОГИКА СКРЫТА В PURE COMPONENT 

    render() {

        let postsElement = this.props.postsData.map(postEl => <Post key={postEl.id} likes={postEl.likes} message={postEl.message} />)

        let onAddNewPost = (values) => {
            this.props.addPost(values.newTextBody)
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