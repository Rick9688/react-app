import React from "react";
import classes from './Users.module.css'
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users =(props) => {

        let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for(let i = 1; i<=pagesCount; i++) {
            pages.push(i)
        }
return (
    <div className={classes.users}>
        <h2 className={classes.title} >Users</h2>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                onClick={()=> {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={classes.usersWrapper}>
                <div className={classes.avatar_followBtn_wrapper}>
                    <img src={u.photos.small !=null ? u.photos.small: userPhoto } className={classes.avatar}/>
                    {u.followed
                        ? <button onClick={() => {axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials: true,
                                headers: {
                                        'API-KEY': '45efece1-dd99-402c-96fc-131533cf1429'
                                }
                        })
                            .then(response => {
                                    if(response.data.resultCode === 0){
                                            props.unfollow(u.id)
                                    }
                            })

                                }
                        }>Unfollow</button>
                        : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                                'API-KEY': '45efece1-dd99-402c-96fc-131533cf1429'
                                        }
                                })
                                    .then(response => {
                                           if(response.data.resultCode === 0){
                                                   props.follow(u.id)
                                           }
                                    })
                                }}>Follow</button>}
                </div>
                <div className={classes.info}>
                    <div className={classes.name_status_wrapper}>
                        <NavLink to={`/Profile/${u.id}`}>
                            <h2>{u.name}</h2>
                        </NavLink>
                        <p>{u.status}</p>
                    </div>
                    <div className={classes.country_city_wrapper}>
                        <p>{'u.location.country'}</p>
                        <p>{'u.location.city'}</p>
                    </div>
                </div>

            </div>)
        }
        <button className={classes.showMoreBtn}>Show more</button>
           </div>
        )

        }

export default Users;