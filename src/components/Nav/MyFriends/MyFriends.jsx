import React from 'react';
import classes from './MyFriends.module.css'
import Friend from "./Friend/Friend";


const MyFriends = (props) => {
    const friendsElements = props.state.sidebarData.friendsData.map(friend => <Friend name = {friend.name} id = {friend.id} url={friend.pic}/>)
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