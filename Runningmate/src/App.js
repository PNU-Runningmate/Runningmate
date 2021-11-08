// import logo from './logo.svg';
import './App.css';
import Loginpage from './components/page/Loginpage';
import React from 'react';
import {Route,Switch} from 'react-router-dom'
// import Home from './components/page/Home';
import RegisterPage from './components/page/RegisterPage';
import Main from './components/Main';
import Waitingpage from './components/page/Waitingpage';
import Friendpage from './components/page/Friendpage';
import Infopage from './components/page/Infopage';
import Socket from './components/page/Socket'
function App() {
  return (
    <div>
      <Switch>
        <Route component={Loginpage} path='/' exact />
        <Route component={RegisterPage} path='/Register' />
        <Route component={Main} path='/Main'/>
        <Route component={Waitingpage} path='/waiting' />
        <Route component={Socket} path='/room'/>
        <Route component={Friendpage} path='/friend' />
        <Route component={Infopage} path='/info' />
      </Switch>
    </div>
  );
}

export default App;