import React, {  useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
// import KakaoLogin from "./KakaoLogin";
import LoginImage from "../LoginImage";
import axios from 'axios';
axios.defaults.withCredentials = true;

const styles = (theme) => ({
  loginTotal: {
    marginLeft: "30%",
    marginRight: "30%",
    width: "30%",
    fontFamily: "Pretendard-Light",
    fontSize: "1rem",
    "@media (max-width:960px)": {
      marginLeft: "8%",
      marginRight: "10%",
      width: "80%",
    },
  },
  join: {
    marginTop: "1.8rem",
    marginBottom: "9rem",
    height: "2.5rem",
    lineHeight: "2.5rem",
    paddingLeft: "3rem",
    backgroundColor: "#eeeeee",
  },
});


const LoginForm2 = ({ classes }) => {
  const history=useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    if( email === "" || password === ""){
      alert('아이디와 비밀번호를 입력해주세요');
    }else{
    axios.post('http://localhost:5000/api/auth/login',{
          email: email,
          password: password,
      }).then((data)=>{
        if(data.status === 200){
          alert('로그인 성공!')
          history.push('/main')
          // History.push("/waiting")
        }
          //redirect 시켜주기.?
          //아니면 다른 응답코드 400 500 받앗을때 처리해주기
      })
      .catch(err=>{
        console.log(err);
      })
      console.log('누르긴함');
    };
  };
  const handleLogin2 = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/api/auth/logout").then((data)=>{console.log(data)})
    .catch((err)=>{
      console.log(err)
    })
    };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="root">
        <form noValidate autoComplete="off" className={classes.loginTotal}>
          {/* <LoginImage /> */}
          <h1
            style={{
              textAlign: "center",
              fontSize: "25px",
              letterSpacing: "1.5px",
            }}
          >
            <Link
              to="/"
              style={{ textDecorationLine: "none", color: "black" }}
            >
              WELCOME!
            </Link>
          </h1>

          <TextField
            label="Email"
            margin="normal"
            fullWidth
            onChange={onChangeEmail}
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={onChangePassword}
          />
          <div style={{ marginTop: "10px", paddingLeft: "5px" }}>
            <Button
              style={{
                float: "right",
                fontSize: "0.8rem",
                textTransform: "none",
                // paddingBottom: "10px",
              }}
              color="inherit"
            >
              비밀번호를 잊으셨나요?
            </Button>
            <Button
              style={{
                width: "100%",
                fontSize: "30sp",
                textTransform: "none",
                backgroundColor: "#67BDEC",
                border: "none",
                color: "white",
                // fontWeight: "700",
                borderRadius: "12px",
                
              }}
              variant="outlined"
              color="inherit"
              onClick={handleLogin}
            >
              로그인
            </Button>
            <Link to="/Register" style={{textDecorationLine: "none"}}>
              <Button
                style={{
                  width: "100%",
                  fontSize: "30sp",
                  textTransform: "none",
                  backgroundColor: "#DCDCDC",
                  border: "none",
                  color: "black",
                  // fontWeight: "700",
                  borderRadius: "12px",
                  marginTop: "10px",
                }}
                variant="outlined"
                color="inherit"
              >
                회원가입
              </Button>
              
            </Link>
            <a href="http://localhost:5000/api/auth/kakao" >
              <img src='img/login2.png' alt='loginimg' style={{marginTop:'10px', width:'100%'}} /></a>
            <Button onClick={handleLogin2}>로그아웃</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(LoginForm2);
