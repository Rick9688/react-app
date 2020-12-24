import React from "react";
import classes from "./FormControls.module.css"
import {Field} from "redux-form";

export const TextArea = ({input,meta: {error,touched},...props}) => {
    const hasError = error && touched
    return (
        <div className={classes.formControls + " " + (hasError ? classes.error : "")}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input,meta,...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControls + " " + (hasError ? classes.error : "")}>
            <input {...input} {...props}></input>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder,name,component, validators) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validators}/>
        </div>
    )
}