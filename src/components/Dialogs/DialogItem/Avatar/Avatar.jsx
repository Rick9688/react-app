import React from 'react';
import classes from './Avatar.module.css'

const Avatar = (props) => {
    return (
        <img src={props.url} className={classes.img} alt={'avatar'}/>
    )
}

export default Avatar