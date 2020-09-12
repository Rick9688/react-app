import React from 'react';
import classes from './MyFriends.module.css'
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";


const MyFriends = (props) => {
    const friendsElements = props.state.friendsData.map(friend => <Friend name = {friend.name} id = {friend.id} url={friend.pic}/>)
    return (
        <div className={classes.friends_panel}>
           <h2 className={classes.title}>Friends</h2>
            <div className={classes.item} >
                {friendsElements}
            </div>
        </div>
    )
}

export default MyFriends;