import React from 'react';
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus, savePhoto} from "../../redux/profileReducer";
import Profile from "./Profile";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshPage() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshPage() 
    }


    componentDidUpdate(prevProps,prevState,snapshot) {
          if(this.props.match.params.userId !== prevProps.match.params.userId) {
              this.refreshPage()
          }
       
    }
    render() {
        return (
            <Profile{...this.props} profile={this.props.profile} 
                                    status={this.props.status}
                                    updateStatus={this.props.updateStatus}
                                    isOwner={!this.props.match.params.userId}
                                    savePhoto={this.props.savePhoto} />
        )
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto}),
    withRouter,
)(ProfileContainer)