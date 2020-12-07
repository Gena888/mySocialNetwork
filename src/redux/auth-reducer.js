import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';


const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const PASS_ERROR = 'PASS_ERROR'


let inilialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    rememberMe: false
};

const authReducer = (state = inilialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_USER_PROFILE:
            // debugger
            return {
                ...state,
                ...action.profileUserData
            }


        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const setUserProfileData = (profileUserData) => ({ type: SET_USER_PROFILE, profileUserData })

export const showPassError = () => ({ type: PASS_ERROR, passError: true })

// thunks

export const getUserDataThunk = () => (dispatch) => {
    return authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email, true));

            }
        });
}



export const LoginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.Login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getUserDataThunk())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', { _error: message }))
            }

        });
}



export const LogoutThunk = () => (dispatch) => {
    authAPI.Logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        });
}




export default authReducer;
