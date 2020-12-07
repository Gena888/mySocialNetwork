import { profileAPI, authAPI } from './../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const PASS_ERROR = 'PASS_ERROR'


let inilialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    rememberMe: false,
    passError: false 
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
        case PASS_ERROR:
            return {
                ...state,
                passError: action.passError
            }


        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth, passError) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth, passError } });

export const setUserProfileData = (profileUserData) => ({ type: SET_USER_PROFILE, profileUserData })

export const showPassError = () => ({ type: PASS_ERROR, passError: true })

// thunks

export const getUserDataThunk = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email, true, false));


            }

        });
}



export const LoginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.Login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getUserDataThunk())
            } else if (data.resultCode === 1) {
                dispatch(showPassError())
            }
            // в противном случае resultCode = 1 - неверный пас, 
            //dispatch(showPasswordMessage())??? это добавит в стэйт мессагу и если мессага - отображаем блок в jsx

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


//authAPI.me()(this.props.setAuthUserData, this.props.setUserProfileData)


export default authReducer;
