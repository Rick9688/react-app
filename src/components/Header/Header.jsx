import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className ={classes.header}>
            <img src="https://st.depositphotos.com/1000940/1352/v/450/depositphotos_13523530-stock-illustration-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BA%D0%B0%D0%BA-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BD%D0%B0-%D0%B3%D0%BB%D1%8F%D0%BD%D1%86%D0%B5%D0%B2%D0%BE%D0%B9.jpg"></img>
            <div className={classes.loginBlock}>
                {props.isAuth? props.login:
                <NavLink to={'/login'}>LogIn</NavLink>}
            </div>
        </header>
    )
}

export default Header;