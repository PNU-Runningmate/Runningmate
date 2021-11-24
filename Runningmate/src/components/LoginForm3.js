import React from "react";
import '../styles/Login.css';

const LoginForm3 = () => {

    return (
      <div id='login_page'>
            <div id='welcome'>Welcome!</div>
            <div id='runningmate'>RunningMate</div>
            <img id='image' src="img/back2.png" alt='mypic' className="image01"></img>
            <div style={{ marginTop: "10px" }}>
              <a href="https://runningmate-server-api.herokuapp.com/api/auth/kakao">
                <img src='img/login2.png' alt='loginimg' style={{marginTop:'50px', paddingLeft: '40px', paddingRight: '40px',width:'100%'}} />
              </a>
              {/* <Button onClick={handleLogin2} id='logout_btn'>로그아웃</Button> */}
            </div>
        
      </div>
    );
  };
  
  export default LoginForm3;