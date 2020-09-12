import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";


const App = (props) => {
  return (
      <BrowserRouter>
        <div className ="app_wrapper">
          <Header/>
          <Nav state={props.state.sitebarData}/>
          <div className='app_wrapper_content'>
            <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagePage} /> }/>
              <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />}/>
              <Route path='/music' component= {Music}/>
              <Route path='/news' component= {News}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
