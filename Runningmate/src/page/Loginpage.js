import React from 'react';
import LoginForm2 from '../components/LoginForm2';
import '../styles/Loginpage.css'

const Loginpage = () => {
  
  return (
    <div style={{'height' : '100vh'}} id='sum'>
      <img src="img/backimage.png" alt='mypic' className="image01"></img>
      <LoginForm2 className='LoginForm2'/>
    </div>
  );
};

export default Loginpage;