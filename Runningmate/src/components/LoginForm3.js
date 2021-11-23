import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import '../styles/Login.css';
axios.defaults.withCredentials = true;


const LoginForm3 = () => {
    const handleLogin2 = (e) => {
        e.preventDefault();
        axios.get("http://localhost:5000/api/auth/logout").then((data)=>{console.log(data)})
        .catch((err)=>{
          console.log(err)
        })
        };

    return (
      <div id='login_page'>
            <div id='welcome'>Welcome!</div>
            <div id='runningmate'>RunningMate</div>
            <img id='image' src="img/back2.png" alt='mypic' className="image01"></img>
            <div style={{ marginTop: "10px" }}>
              <a href="http://localhost:5000/api/auth/kakao" >
                <img src='img/login2.png' alt='loginimg' style={{marginTop:'50px', paddingLeft: '40px', paddingRight: '40px',width:'100%'}} /></a>
              <Button onClick={handleLogin2} id='logout_btn'>로그아웃</Button>
            </div>
        
      </div>
    );
  };
  
  export default LoginForm3;