import React from 'react';
import LoginForm2 from '../auth/LoginForm2';
// import LoginImage from '../LoginImage';
// import KakaoLogin from '../auth/KakaoLogin';

const Loginpage = () => {
  return (
    <div style={{'height' : '100vh'}} id='sum'>
      {/* <LoginImage/> */}
      <LoginForm2/>
      {/* <KakaoLogin/> */}
    </div>
  );
};

export default Loginpage;