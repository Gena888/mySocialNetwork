let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, likes: 121, message: 'hallow it.s me' },
                { id: 2, likes: 231, message: 'it is my firs post' },
                { id: 3, likes: 321, message: 'second post hear' }
            ],
            newPostText: 'it-camasutra'
        },
        dialogsPage: {
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
            ]
        },
        navPage: {
            navFriendsData: [
                { id: 1, imgSrc: 'https://sun1.beltelecom-by-minsk.userapi.com/c627716/v627716457/2f13c/k4JKIT907iM.jpg', name: 'sasha' },
                { id: 2, imgSrc: 'https://sun9-4.userapi.com/c854216/v854216683/1adb0e/RPXbHPkU0U0.jpg', name: 'dima' },
                { id: 3, imgSrc: 'https://sun1.beltelecom-by-minsk.userapi.com/c844417/v844417074/6d041/N75krJg5dtc.jpg', name: 'igor' },
                { id: 4, imgSrc: 'https://sun9-18.userapi.com/cqGGLrpxAgHQf0x5w9-mtcIKXXXNyF50BocQyA/eAjdupisXrU.jpg', name: 'gleb' }
            ]
        }
    },

    _callSubscriber() {
    },
    // _postAdder() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._callSubscriber();
    //     this._state.profilePage.newPostText = '';
    // },
    // _updaterNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //type: "ADD-POST"
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber();
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }

}

export default store;
window.store = store;



