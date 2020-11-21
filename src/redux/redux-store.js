
import {combineReducers, createStore} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navReducer from './nav-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer
});

let store = createStore(reducers);

export default store;
