import dialogReducer, {sendMessageActionCreator} from "./dialogReducer";
let state = {
    messageData: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you doing?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Let\'s go'},
        {id: '5', message: 'Bue'}
    ],
};

    test('length of messageData should be incremented', () => {
    let action = sendMessageActionCreator('Hi!');
    let newState = dialogReducer(state,action);
    expect (newState.messageData.length).toBe(6)
});