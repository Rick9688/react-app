import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./ProfileInfo/ProfileInfo.module.css";


const Profile = (props) => {
    return (
        <div>
            <img className={classes.main_img}
                 src="http://www.imageonemri.ca/image/w2000-c5:2/files/58532088_l.jpg" alt={"img"}></img>
            <ProfileInfo savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile;