const SET_USER_DATA = 'SET_USER_DATA';


let inilialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

const authReducer = (state = inilialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }






        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login) =>
    ({ type: SET_USER_DATA, data: { userId, email, login } });

// export const setToggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;