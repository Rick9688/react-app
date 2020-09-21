const update_message_text = 'UPDATE-MESSAGE-TEXT';
const send_message = 'SEND-MESSAGE';
const initialState = {
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
    newMessageText: ''}
const dialogReducer = (state = initialState,action) => {
    switch(action.type) {
        case send_message:
            let newMessage = {
                id: '6',
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = ' ';
            return state;
        case update_message_text:
            state.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
}

export default dialogReducer