import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        { id: 1, likes: 121, message: 'hallow it.s me' },
        { id: 2, likes: 231, message: 'it is my firs post' },
        { id: 3, likes: 321, message: 'second post hear' }
    ],
    newPostText: 'it-camasutra',
    profile: null,
    status: null
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

        case SET_STATUS:
            return {
                ...state,
                status: action.status
                
            }



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

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
})
///--


export const getProfileDataThunk = (userId) => (dispatch) => {
    profileAPI.getProfileData(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });

}

export const getStatusThunk = (userId) => (dispatch => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
})

export const updateStatusThunk = (status) => (dispatch => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });
})


export default profileReducer;