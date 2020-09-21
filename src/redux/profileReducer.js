const update_post_text = 'UPDATE-POST-TEXT';
const add_message = 'ADD-POST';
const initialState = {
    posts : [
        {id: '1', message: 'Hi', likesCounter: '15'},
        {id: '2', message: 'It\'s my first post', likesCounter: '25'},
        {id: '3', message: 'Огогогого', likesCounter: '18'},
        {id: '4', message: 'Ну шо ты, голова?', likesCounter: '29'},
    ],
    newPostText: '' };
const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case add_message:
            let newPost = {
                id: '5',
                message: state.newPostText,
                likesCounter: '0'
            };
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state
        case update_post_text:
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;