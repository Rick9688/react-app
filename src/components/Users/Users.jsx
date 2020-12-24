import React from "react";
import classes from './Users.module.css'
import Paginator from "../Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>
            <h2 className={classes.title}>Users</h2>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize} />
            <div>
                {
                    users.map(u => <User user={u}
                                         isFollowingInProgress={props.isFollowingInProgress}
                                         key={u.id}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                        />
                    )
                }
            </div>
        </div>)
}


export default Users;