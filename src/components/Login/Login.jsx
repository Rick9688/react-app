import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom"
import classes from "../../FormControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {<Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>}
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} type={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginUser})(Login)