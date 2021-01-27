import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";

type MapStateType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    isFollowingInProgress: Array<number>
    isFetching: boolean
}

type MapDispatchType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
}
type PropsType = MapDispatchType & MapStateType

class UsersApiComponent extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        const{pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);

    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFollowingInProgress={this.props.isFollowingInProgress}
        />
        </>

    }




}

let mapStateToProps = (state: AppStateType): MapStateType  => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}



export default compose(
    connect(mapStateToProps, {
    follow,unfollow,setUsers, getUsers: requestUsers, toggleIsFetching,toggleFollowingProgress
}))(UsersApiComponent);