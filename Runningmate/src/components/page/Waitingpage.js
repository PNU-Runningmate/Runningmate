import React, { useState } from "react";
import "../../styles/Waitingpage.css";
// import Hammer from '../../../public/img/hammer.jpg'

const Waitingpage = () => {

  const [message, setMessage] = useState("");
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert('나: '+message);
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <div className="nav">
        <div className="km">5km</div>
        2번 대기실
        <div className="edit">
          <img id="edit_img" src="img/edit2.jpg" alt="profile" />
        </div>
      </div>

      <div className="par-bar">
        <div className="current">- 현재 참여자(4)</div>

        <div className="par-box">
          <div className="par">
            <img id="profile_img" src="img/profile.jpg" alt="profile" />
            <img id="profile_img" src="img/hammer.jpg" alt="profile" />
            <img id="profile_img" src="img/profile.JPG" alt="profile" />
            <img id="profile_img" src="img/hammer.jpg" alt="profile" />
          </div>
          <div className="name">
            <div>김ㅇㅇ님</div>
            <div>이ㅇㅇ님</div>
            <div>박ㅇㅇ님</div>
            <div>최ㅇㅇ님</div>
          </div>

          <div className="ready">
            <button type="button" id="r-button">
              준비
            </button>
            <button type="button" id="s-button">
              시작
            </button>
          </div>
        </div>
      </div>

      <div className="chatting">
        <div className="content">

        </div>
      </div>

      <div className="chat-bar">
        <input
          type="text"
          name="chat"
          size="32"
          id="chat-message"
          placeholder="chatting"
          onChange= {onChangeMessage}
          value={message}
          onKeyPress={onKeyPress}
        ></input>
        <button type="button" id="chat-message2" onClick={onClick}>
          전송
        </button>
      </div>
    </div>
  );
};

export default Waitingpage;
