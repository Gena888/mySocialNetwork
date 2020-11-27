const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SHOWMORE = 'SHOW-MORE'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let inilialState = {
    usersData: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {
                ...state,
                usersData: [...action.users]

            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page

            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, 
                isFetching: action.isFetching
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
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setToggleFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;