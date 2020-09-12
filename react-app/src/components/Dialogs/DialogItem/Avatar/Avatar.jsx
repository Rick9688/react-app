import React from 'react';
import classes from './Avatar.module.css'

const Avatar = (props) => {
    return (
        <img src={props.url} className={classes.img}/>
    )
}

export default Avatar