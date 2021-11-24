import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from  'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './page/Loginpage';
import Main from './page/Main';
import Friendpage from './page/Friendpage';
import Infopage from './page/Infopage';
import CreateRoom from './page/CreateRoom';
import Room from './page/Room';
import Map from './components/Map'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route component={Loginpage} path='/' exact />
        <Route component={Main} path="/main"/>
        <Route component={CreateRoom} path='/create_room'/>
        <Route component={Room} path='/room'/>
        <Route component={Friendpage} path='/friend' />
        <Route component={Infopage} path='/info' />
        <Route component={Map} path='/map'/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
