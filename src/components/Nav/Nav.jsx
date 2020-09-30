import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";



const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile" activeClassName ={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" activeClassName ={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/users" activeClassName ={classes.active}>Users</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" activeClassName ={classes.active}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" activeClassName ={classes.active}>News</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;