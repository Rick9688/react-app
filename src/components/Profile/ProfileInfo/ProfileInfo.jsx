import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileDataFormReduxForm from "../ProfileDataForm";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e) => {
if(e.target.files.length) {
    props.savePhoto(e.target.files[0]);
}
    }


    return (

        <div>

            <div className={classes.avatar_description}>
                <img src={props.profile.photos.large || userPhoto} className={classes.avatar} alt={'baner'}/>
                {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}
                {editMode ? <ProfileDataFormReduxForm profile={props.profile} /> : <ProfileData profile={props.profile} isOwner={props.isOwner} updateStatus={props.updateStatus} status={props.status} goToEditMode={() => {setEditMode(true)}}/>}


            </div>

        </div>


    )
}

const ProfileData = ({profile, isOwner, goToEditMode, updateStatus, status}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {!profile.lookingForAJob ? "yes" : "no"}
        </div>
        {!profile.lookingForAJob &&
        <div>
            <b>My professional skills</b> : {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b> : {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
}
const  Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;




