import React from 'react';
import classes from './../MyFriends.module.css'
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    return (
            <div className={classes.item} >
                <img src={props.url} className={classes.img}/>
                    {props.name}
            </div>
    )
}

export default Friend;