const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SHOWMORE = 'SHOW-MORE'

let inilialState = {
    usersData: []
}

const usersReducer = (state = inilialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;

                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;

                })
            }
        case SET_USERS: {
            debugger

            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
                
            }
        }
        default:
            return state;

    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const showMoreAC = () => ({ type: SHOWMORE });


export default usersReducer;