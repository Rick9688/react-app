import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


const store = {
    _callSubscriber() {
    },

    _state: {
        profilePage: {
            posts : [
                {id: '1', message: 'Hi', likesCounter: '15'},
                {id: '2', message: 'It\'s my first post', likesCounter: '25'},
                {id: '3', message: 'Огогогого', likesCounter: '18'},
                {id: '4', message: 'Ну шо ты, голова?', likesCounter: '29'},
            ],
            newPostText: '' },
        messagePage: {
            dialogData : [
                {id: '1', name: 'Andrew', pic: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'},
                {id: '2', name: 'Rinya', pic:'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'},
                {id: '3', name: 'Sasha', pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'},
                {id: '4', name: 'Slawon', pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'},
                {id: '5', name: 'German', pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'}
            ] ,
            messageData : [
                {id: '1', message: 'Hi!' },
                {id: '2', message: 'How are you doing?'},
                {id: '3', message: 'Yo'},
                {id: '4', message: 'Let\'s go'},
                {id: '5', message: 'Bue'}
            ],
            newMessageText: ''},
        sidebarData: {
            friendsData:[
                {id: '1', name: 'Andrew', pic: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'},
                {id: '2', name: 'Rinya', pic:'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'},
                {id: '3', name: 'Sasha', pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'}
            ]
        }
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagePage = dialogReducer(this._state.messagePage,action)
        this._callSubscriber(this._state)
    }
};



export default store