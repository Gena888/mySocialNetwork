import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        { id: 1, likes: 121, message: 'hallow it.s me' },
        { id: 2, likes: 231, message: 'it is my firs post' },
        { id: 3, likes: 321, message: 'second post hear' }
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newTextBody,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
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
            case DELETE_POST: 
            return {
                ...state, 
                postsData: state.postsData.filter(p => p.id != action.postId)
            }



        default:
            return state;

    };

};

export const deletePostAC = (postId) => ({
    type: DELETE_POST,
    postId
})


export const addNewPostAC = (newTextBody) => ({
    type: ADD_POST,
    newTextBody
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