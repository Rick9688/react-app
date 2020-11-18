import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {withRouter, BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import loginPage from "./components/Login/Login"
import {connect, Provider} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <Nav store={this.props.store}/>
                <div className='app_wrapper_content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/login' component={loginPage}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = withRouter(connect(mapStateToProps, {getAuthUserData, initializeApp})(App));

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp