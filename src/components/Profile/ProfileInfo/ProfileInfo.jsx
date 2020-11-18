import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>

            <div className={classes.avatar_description}>
                <img src={props.profile.photos.large !=null ? props.profile.photos.large: userPhoto} className={classes.avatar}/>
                <div className={classes.info}>
                    <h2 className={classes.name}>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                    <p>Looking for a job:{props.profile.lookingForAJob? 'yes': 'no'}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>


            </div>

        </div>


    )
}

export default ProfileInfo;




