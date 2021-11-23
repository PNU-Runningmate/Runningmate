import React from 'react';
import LoginForm3 from '../components/LoginForm3';
import '../styles/Loginpage.css'

const Loginpage = () => {
  
  return (
    <div style={{'height' : '100vh'}} id='sum'>
      {/* <img src="img/backimage.png" alt='mypic' className="image01"></img> */}
      <LoginForm3 className='LoginForm2'/>
    </div>
  );
};

export default Loginpage;