import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    
    return (
                 <div className = {classes.item}>
                    <img src ='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'></img>
                    {props.message}
                    <div>
                        <span>Like</span> {props.likesCount}
                    </div>
                </div>        
    )
}

export default Post;