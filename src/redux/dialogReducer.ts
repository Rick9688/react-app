const SEND_MESSAGE = 'SEND_MESSAGE';
type DialogType = {
    id: string
    name: string
    pic: string
}

type MessageType = {
    id: string
    message: string
}
const initialState = {
    dialogData : [
        {
            id: '1',
            name: 'Andrew',
            pic: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'
        },
        {
            id: '2',
            name: 'Rinya',
            pic:'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'
        },
        {
            id: '3',
            name: 'Sasha',
            pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
        },
        {
            id: '4',
            name: 'Slawon',
            pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
        },
        {
            id: '5',
            name: 'German',
            pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
        }
    ] as Array<DialogType> ,
    messageData : [
        {id: '1', message: 'Hi!' },
        {id: '2', message: 'How are you doing?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Let\'s go'},
        {id: '5', message: 'Bue'}
    ] as Array<MessageType>,
    newMessageText: ''}
export type InitialStateType = typeof initialState
const dialogReducer = (state = initialState,action: any): InitialStateType  => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: '6',
                message: action.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messageData = [...stateCopy.messageData]
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        default:
            return state;
    }
}
type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export const sendMessageActionCreator = (newMessageText: string): SendMessageActionCreatorType =>({type: 'SEND_MESSAGE',newMessageText})
export default dialogReducer