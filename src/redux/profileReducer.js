const update_post_text = 'UPDATE-POST-TEXT';
const add_message = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const initialState = {
    posts : [
        {id: '1', message: 'Hi', likesCounter: '15'},
        {id: '2', message: 'It\'s my first post', likesCounter: '25'},
        {id: '3', message: 'Огогогого', likesCounter: '18'},
        {id: '4', message: 'Ну шо ты, голова?', likesCounter: '29'},
    ],
    newPostText: '',
    profile: null}


const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case add_message: {
            let newPost = {
                id: '5',
                message: state.newPostText,
                likesCounter: '0'
            };
            let newState = {...state};
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = '';
            return newState;
        }
        case update_post_text: {
            let newState = {...state}
            newState.newPostText = action.postText;
            return newState;
        }
        case SET_USER_PROFILE:
            return {
        ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export const setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile})

export default profileReducer;