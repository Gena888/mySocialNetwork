const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageTextData,
                addresserYou: false
            };
            state.messagesData.push(newMessage);
            state.newMessageTextData = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageTextData = action.newMessageText;
            return state;

        default: 
            return state;
    }
}

export const addNewMessageActionCreator = () => ({
    type: ADD_NEW_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
});

export default dialogsReducer;