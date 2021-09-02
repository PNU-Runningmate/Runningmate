import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import LoginImage from "../LoginImage";

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
  const handleLogin = (e) => {
    e.preventDefault();
    alert("email:" + email + "  password:" + password);
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
          <LoginImage />
          <h1
            style={{
              textAlign: "center",
              "font-size": "25px",
              letterSpacing: "1.5px",
            }}
          >
            <Link
              to="/"
              style={{ "text-decoration-line": "none", color: "black" }}
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
                "font-size": "0.8rem",
                "text-transform": "none",
                paddingBottom: "20px",
              }}
              color="inherit"
            >
              비밀번호를 잊으셨나요?
            </Button>
            <Button
              style={{
                width: "100%",
                "font-size": "1rem",
                "text-transform": "none",
                "background-color": "#67BDEC",
                border: "none",
                color: "white",
                "font-weight": "700",
                "border-radius": "20px",
              }}
              variant="outlined"
              color="inherit"
              onClick={handleLogin}
            >
              로그인
            </Button>
            <Link to="/Register" style={{"text-decoration-line": "none"}}>
              <Button
                style={{
                  width: "100%",
                  "font-size": "1rem",
                  "text-transform": "none",
                  "background-color": "#DCDCDC",
                  border: "none",
                  color: "black",
                  "font-weight": "700",
                  "border-radius": "20px",
                  "margin-top": "10px",
                }}
                variant="outlined"
                color="inherit"
              >
                회원가입
              </Button>
            
            </Link>
          </div>
          <KakaoLogin />
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(LoginForm2);
