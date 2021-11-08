import React, { useState,useEffect } from "react";
// import {Link} from 'react-router-dom';
import "../../styles/Waitingpage.css";
import { MdArrowBackIos } from "react-icons/md";
import { socket } from '../modules/SocketContext';
import { Redirect } from "react-router";
import axios from "axios"

const addMessage = (msg)=>{
  const ul = document.querySelector("ul");
  const li = document.createElement('li');
  li.innerText = msg;
  ul.appendChild(li);
}
const Waitingpage = (props) => {
  const [roomNumber2,setRoomNumber] =useState(localStorage.getItem('roomNumber'))
  const [message, setMessage] = useState("");
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    socket.emit("new_message",message,()=>{
      addMessage(message)
    })
    setMessage("");
  };
  const onClickDelete=()=>{
    setRoomNumber('')
    localStorage.removeItem('roomNumber')
    console.log('나가기')
  }
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  const enter = ()=>{
    socket.emit('CreateRoom')
    socket.on('CreateRoom',(data)=>{
      props.history.push(`room?id=${data}`);
    })
    socket.on('Error',(data,roomname)=>{console.log(data); props.history.push(`room?id=${roomname}`)});
  }
  useEffect(()=>{
    socket.on("new_message",addMessage);
  },[]);
  useEffect(()=>{
    const myname = document.querySelector(".myname");
    axios.get("http://localhost:5000/main").then(data=>myname.innerText=`${data.data}님`);
    },[])
  const [ready,setready] =useState(false)
  const onClick2=()=>{
    setready(!ready)
  }
  if (!roomNumber2){
    console.log('조건문 발동')
    return <Redirect to = '/main' />
  }
  const back_button =() =>{
    <Redirect to ='/main' />
  }
  return (
    <div>
      <div className="nav">
        <button onClick={ ()=> {props.history.goBack()}} type='button' className='back_button'><MdArrowBackIos/></button>        <div className="km">5km</div>
        {roomNumber2}번 대기실
        <button onClick={onClickDelete}>나가기</button>
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
            <div className='myname'>김ㅇㅇ님</div>
            <div>이ㅇㅇ님</div>
            <div>박ㅇㅇ님</div>
            <div>최ㅇㅇ님</div>
            <button onClick={enter}>방으로입장</button>
          </div>
          <div className="ready">
            <button type="button" id={ready ? 'yesready':'noready'} onClick={onClick2}>
              {ready ? '준비완료':'준비'}
            </button>
            <button type="button" id="s-button">
              시작
            </button>
          </div>
        </div>
      </div>

      <div className="chatting">
        <div className="content">
          <ul></ul>
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
