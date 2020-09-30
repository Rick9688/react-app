import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
      <BrowserRouter>
        <div className ="app_wrapper">
          <Header/>
          <Nav store={props.store}/>
          <div className='app_wrapper_content'>
            <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
              <Route path='/profile' render={() => <Profile  />}/>
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/music' component= {Music}/>
              <Route path='/news' component= {News}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
