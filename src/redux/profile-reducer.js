import { profileAPI } from './../api/api';

const ADD_POST = '/profile-reducer/ADD-POST';
const SET_USER_PROFILE = '/profile-reducer/SET_USER_PROFILE';
const SET_STATUS = '/profile-reducer/SET_STATUS';
const DELETE_POST = '/profile-reducer/DELETE_POST';
const SAVE_PHOTO_SUCCESS = '/profile-reducer/SAVE_PHOTO_SUCCESS'


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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }


        default:
            return state;

    };

};
// action creators

export const deletePostAC = (postId) => ({ type: DELETE_POST, postId })
export const addNewPostAC = (newTextBody) => ({ type: ADD_POST, newTextBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const savaPhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

/// thunks


export const getProfileDataThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileData(userId)
    dispatch(setUserProfile(data));
}

export const getStatusThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}

export const updateStatusThunk = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhotoThunk = (file) => async (dispatch) => {
    let data = await profileAPI.putNewPhoto(file)
    if (data.resultCode === 0) {
        dispatch(savaPhotoSuccess(data.data.photos));
    }
}

export default profileReducer;