import './App.css';
import Loginpage from './page/Loginpage';
import React,{useState} from 'react';
import {Route,Switch} from 'react-router-dom'
// import Home from './components/page/Home';
// import RegisterPage from './components/page/RegisterPage';
import Main from './page/Main';
import Waitingpage from './page/Waitingpage';
import Friendpage from './page/Friendpage';
import Infopage from './page/Infopage';
import CreateRoom from './page/CreateRoom';
import Room from './page/Room';
import Map from './components/Map'
function App() {
  
  return (
    <div>
      <Switch>
        <Route component={Loginpage} path='/' exact />
        {/* <Route component={RegisterPage} path='/Register' /> */}
        <Route component={Main} path="/main"/>
        <Route component={CreateRoom} path='/create_room'/>
        <Route component={Room} path='/room'/>
        <Route component={Friendpage} path='/friend' />
        <Route component={Infopage} path='/info' />
        <Route component={Map} path='/map'/>
      </Switch>
    </div>
  );
}

export default App;