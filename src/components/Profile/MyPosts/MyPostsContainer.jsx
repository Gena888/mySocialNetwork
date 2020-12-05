import { connect } from 'react-redux';
import { addNewPostAC} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addPost: (newTextBody) => {
            dispatch(addNewPostAC(newTextBody));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;