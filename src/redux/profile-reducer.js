import { API } from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: 1, likes: 121, message: 'hallow it.s me' },
        { id: 2, likes: 231, message: 'it is my firs post' },
        { id: 3, likes: 321, message: 'second post hear' }
    ],
    newPostText: 'it-camasutra',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ' '
            };


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };



        default:
            return state;

    };

};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})


export const getProfileDataThunk = (userId) => (dispatch) => {
    API.getProfileData(userId)
        .then(data => {
           dispatch(setUserProfile(data));
        });

}


export default profileReducer;