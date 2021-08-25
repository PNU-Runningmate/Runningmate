import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "Login.css";

const styles = theme => ({
  loginTotal: {
    marginLeft:"30%",
    marginRight:"30%",
    width:"30%",
    fontFamily: 'Pretendard-Light',
    fontSize: "1rem",
    '@media (max-width:960px)': {
      marginLeft:"8%",
      marginRight:"10%",
      width:"80%",
    }
  },
  join: {
    marginTop: "1.8rem",
    marginBottom: "9rem",
    height: "2.5rem",
    lineHeight: '2.5rem',
    paddingLeft: "3rem",
    backgroundColor: "#eeeeee"
  }
});

class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    alert('login!');
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <img src="img/backimage.png" alt='mypic' className="image01"></img>

        <div className="root" style={{paddingLeft:'10px'}}>
          <form noValidate autoComplete="off" className ={classes.loginTotal}>
          <h1 style={{"textAlign":'center', "font-size":'25px', "letterSpacing": '1.5px'}}>WELCOME!</h1>

            <TextField label="Email" margin="normal" fullWidth/>
            <TextField label="Password" type="password" margin="normal" fullWidth/>

            <div style={{marginTop:"10px", paddingLeft:'5px'}}>
              <Button style={{"float": "right","font-size":"1rem", "text-transform":"none", "paddingBottom":"20px"}} color="inherit">비밀번호를 잊으셨나요?</Button>
              <Button style={{"width":"100%","font-size":"1rem", "text-transform":"none", "background-color":"#67BDEC", "border":"none", "color":"white", "font-weight":"700", "border-radius":'20px'}} variant="outlined" color="inherit" onClick={this.handleLogin}>로그인</Button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default withStyles(styles) (Login);