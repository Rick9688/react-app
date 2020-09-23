import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";MyPosts.jsx





const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id = {post.id} message = {post.message} likesCount = {post.likesCounter}/>)

    let newPostElement = React.createRef()

    const addPost = () => {
        let action = addPostActionCreator()
        props.dispath(action);
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispath(action)
    }
    return (

        <div className={classes.post_block}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea></div>
                <div>
                    <button onClick={addPost}>Add new post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;