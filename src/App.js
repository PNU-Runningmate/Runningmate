import logo from './logo.svg';
import './App.css';
import Loginpage from './components/page/Loginpage';
import React from 'react';
import {Route,Switch} from 'react-router-dom'
// import Home from './components/page/Home';
import RegisterPage from './components/page/RegisterPage';


function App() {
  return (
    <div>
      <Switch>
        <Route component={Loginpage} path='/' exact />
        <Route component={RegisterPage} path='/Register' />
      </Switch>
    </div>
  );
}

export default App;