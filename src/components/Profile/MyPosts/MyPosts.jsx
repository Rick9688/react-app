import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id={post.id} key={post.id} message={post.message}
                                                      likesCount={post.likesCounter}/>)

    const addPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (

        <div className={classes.post_block}>
            <h3>My posts</h3>
            <AddPostsReduxForm onSubmit={addPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}
const maxLength20 = maxLengthCreator(20)
const AddPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Add post'} component={TextArea} name={'newPostText'} validate={maxLength20}/>
            </div>
            <div>
                <button>AddPost</button>
            </div>
        </form>)


}

const AddPostsReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddPostsForm)

export default MyPosts;