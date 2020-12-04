import { profileAPI, userAPI, loginAPI } from './../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE'


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
                ...action.data,
                isAuth: true
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

export const setAuthUserData = (userId, email, login) =>
    ({ type: SET_USER_DATA, data: { userId, email, login } });

export const setUserProfileData = (profileUserData) => ({ type: SET_USER_PROFILE, profileUserData })

export const getUserDataThunk = () => (dispatch) => {
    userAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email));

                profileAPI.getProfileData(data.data.id)
            }

        });
}

export const postLoginDataThunk = (formData) => (dispatch) => {
    userAPI.authMe()
        .then(data => {
            if (data.resultCode !== 0) {
                // let { email, password, rememberMe } = formData;
                let email = formData.email;
                let password = formData.password;
                let rememberMe = formData.rememberMe;
                loginAPI.postLoginData(email, password, rememberMe);
            }
        })

}


// userAPI.authMe(this.props.setAuthUserData, this.props.setUserProfileData)


export default authReducer;
