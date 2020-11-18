import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setTotalUsersCount,
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


class UsersApiComponent extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const{pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber)

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

let mapStateToProps = (state) => {
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
    follow,unfollow,setUsers,setCurrentPage,
    setTotalUsersCount, getUsers: requestUsers, toggleIsFetching,toggleFollowingProgress
}))(UsersApiComponent);