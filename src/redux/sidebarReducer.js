
const initialState = {
    friendsData:[
        {id: '1', name: 'Andrew', pic: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'},
        {id: '2', name: 'Rinya', pic:'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'},
        {id: '3', name: 'Sasha', pic: 'https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'}
    ]
};
const sidebarReducer = (state = initialState,action) => {
return state
};

export default sidebarReducer;