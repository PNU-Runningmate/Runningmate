import React from 'react';
import LoginForm2 from '../auth/LoginForm2';
import '../../styles/Loginpage.css'
// import LoginImage from '../LoginImage';
// import KakaoLogin from '../auth/KakaoLogin';

const Loginpage = () => {
  
  return (
    <div style={{'height' : '100vh'}} id='sum'>
      <img src="img/backimage.png" alt='mypic' className="image01"></img>
      <LoginForm2 className='LoginForm2'/>
      {/* <KakaoLogin/> */}
    </div>
  );
};

export default Loginpage;