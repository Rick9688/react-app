import React from 'react';
import {createField, Input, TextArea} from "../../FormControls/FormControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div>
            <b>Full name</b>: {createField('Full Name', 'fullName',[], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', 'LookingForAJob',[], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b> : {createField('My professional skills', 'LookingForAJobDescription',[], TextArea)}
        </div>
    </form>
}
const  ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm
