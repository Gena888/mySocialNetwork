const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let inilialState = {
    dialogsData: [
        { id: 1, imgSrc: 'https://sun1.beltelecom-by-minsk.userapi.com/c847220/v847220418/c6148/DDmHnFk6Uvw.jpg', name: 'gena' },
        { id: 2, imgSrc: 'https://sun1.beltelecom-by-minsk.userapi.com/c627716/v627716457/2f13c/k4JKIT907iM.jpg', name: 'sasha' },
        { id: 3, imgSrc: 'https://sun9-4.userapi.com/c854216/v854216683/1adb0e/RPXbHPkU0U0.jpg', name: 'dima' },
        { id: 4, imgSrc: 'https://sun1.beltelecom-by-minsk.userapi.com/c844417/v844417074/6d041/N75krJg5dtc.jpg', name: 'igor' },
        { id: 5, imgSrc: 'https://sun9-18.userapi.com/cqGGLrpxAgHQf0x5w9-mtcIKXXXNyF50BocQyA/eAjdupisXrU.jpg', name: 'gleb' }
    ],
    messagesData: [
        { id: 1, message: 'hi', addresserYou: true },
        { id: 2, message: 'how are you', addresserYou: false },
        { id: 3, message: 'yo', addresserYou: true },
        { id: 4, message: 'yo', addresserYou: true },
        { id: 5, message: 'yo', addresserYou: true }
    ],
    newMessageTextData: ' '
}

const dialogsReducer = (state = inilialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let stateCopy = { ...state };
            let newMessage = {
                id: 6,
                message: stateCopy.newMessageTextData,
                addresserYou: false
            };
            stateCopy.messagesData = [ ...state.messagesData ];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageTextData = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageTextData = action.newMessageText;
            return stateCopy;
        }

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