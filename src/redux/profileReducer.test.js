import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

const state = {
    posts: [
        {id: '1', message: 'Hi', likesCounter: '15'},
        {id: '2', message: 'It\'s my first post', likesCounter: '25'},
        {id: '3', message: 'That`s cool!', likesCounter: '18'},
        {id: '4', message: 'Oh it`s amazing', likesCounter: '29'},
    ]
}

test('length of posts should be incremented', () => {
    //test data
    let action = addPostActionCreator('Hi, there!');

    //action
    let newState = profileReducer(initialState,action);

    //expectation
    expect (newState.posts.length).toBe(5)
});

test('Message of post should be correct ', () => {
    //test data
    let action = addPostActionCreator('Hi, there!');

    //action
    let newState = profileReducer(initialState,action);

    //expectation
    expect (newState.posts[4].message).toBe('Hi, there!')
});

test('length of posts should be decremented ', () => {
    //test data
    let action = deletePost(1)

    //action
    let newState = profileReducer(state,action);

    //expectation
    expect (newState.posts.length).toBe(3)
});