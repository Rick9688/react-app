import React from "react";
import classes from './Users.module.css'
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";

const User = ({user,isFollowingInProgress,unfollow,follow}) => {
    return (
        <div>
            <div className={classes.avatar_followBtn_wrapper}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={'avatar'} className={classes.avatar}/>
                {user.followed
                    ? <button className={classes.btn} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {

                        unfollow(user.id)
                    }
                    }>Unfollow</button>
                    : <button className={classes.btn} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)

                    }
                    }>Follow</button>}
            </div>
                <div className={classes.name_status_wrapper}>
                    <NavLink to={`/Profile/${user.id}`}>
                        <h2>{user.name}</h2>
                    </NavLink>
                    <p>{user.status}</p>
                </div>

        </div>)
}



export default User;