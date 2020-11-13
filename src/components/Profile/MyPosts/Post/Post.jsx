import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img className={s.itemImg} src="https://sun9-15.userapi.com/c831109/v831109883/6c1b4/uLG7nnvmBRM.jpg" alt="" />

            {props.message}

            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>


    );
}

export default Post;