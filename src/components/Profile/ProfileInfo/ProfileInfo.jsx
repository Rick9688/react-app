import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>

            <div className={classes.avatar_description}>
                <img src={props.profile.photos.large} className={classes.avatar}/>
                <div className={classes.info}>
                    <h2 className={classes.name}>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                    <p>Looking for a job:{props.profile.lookingForAJob? 'yes': 'no'}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                </div>

            </div>

        </div>


    )
}

export default ProfileInfo;




