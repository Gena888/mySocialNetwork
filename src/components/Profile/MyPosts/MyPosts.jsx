import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';



const MyPosts = (props) => {

    let postsElement = props.state.profilePage.postsData.map(postEl => <Post likes={postEl.likes} message={postEl.message} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.store.addPost();
    };
    // теперь для поста текст берётся не из инпута через .carent.value по 
    // ссылке созданной с помощью React.createRef а сразу в state функцией из state. 

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.updateNewPostText(text);
    };
    //создаём функцию onPostCahnge которая меняет state значение забиток
    // в state для value в текст эриа. почле чего ререндарит сразу страницу 

    return (
        <div className={s.postsBlock} >
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.state.profilePage.newPostText} />
                    {/* передали значение value из state через пропс. 
                        и передали функцию onPost обьявленную выше */}
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