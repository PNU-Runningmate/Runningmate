import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import axios from "axios";
import { useHistory } from "react-router";
import LatestRecord from "../components/LatestRecord";
import Rank from "../components/Rank";
import { serverURL } from "../components/modules/ServerConst";
import Button from "@material-ui/core/Button";

axios.defaults.withCredentials = true;
const RoomState = () => {
  const path = localStorage.getItem("RoomUrl");
  return path ? `room${path}` : "create_room";
};
const Main = (props) => {
  const RoomPath = RoomState();
  const history = useHistory();
  const [nickname, setnickname] = useState("");
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day0fweek = week[now.getDay()];

  const handleLogin2 = (e) => {
    e.preventDefault();
    axios
      .get(`${serverURL}/api/auth/logout`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    history.push("/");
  };

  useEffect(() => {
    axios
      .get(`${serverURL}/main`)
      .then((data) => {
        setnickname(`안녕하세요 ${data.data.nickname}님`);
      })
      .catch((e) => setnickname(e.response.data.error));
  }, []);   

  return (
    <div className="background">
      <div id="up-nav-var">
        <div id="helloword">
          <div id="username">{nickname}</div>

          <div id="date">{todayMonth + "-" + todayDate + "-" + day0fweek}</div>
        </div>

        <div>
          <Button onClick={handleLogin2} id="logout_btn2">
            Logout
          </Button>
        </div>
      </div>
      <LatestRecord />
      <Rank />

      <div id="bottom-nav-bar">
        <button
          id="nav-button"
          onClick={() => {
            history.push("/main");
          }}
        >
          <img src="img/home.png" alt="mypic" className="home_img"></img>
        </button>
        <button
          id="nav-button"
          onClick={() => {
            history.push(`/${RoomPath}`);
          }}
        >
          <img src="img/message.png" alt="mypic" className="home_img"></img>
        </button>
        <button
          id="nav-button"
          onClick={() => {
            history.push("/info");
          }}
        >
          <img src="img/info.png" alt="mypic" className="home_img"></img>
        </button>
      </div>
    </div>
  );
};

export default Main;
