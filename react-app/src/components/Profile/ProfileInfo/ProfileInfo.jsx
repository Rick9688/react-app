import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className = {classes.main_img} src="http://www.imageonemri.ca/image/w2000-c5:2/files/58532088_l.jpg"></img>
            <div className ={classes.avatar_description}>
                ava+description
            </div>
        </div>


)
}

export default ProfileInfo;




