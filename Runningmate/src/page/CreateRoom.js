import React,{useEffect,useState,useRef} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function CreateRoom(props) {
    const history = useHistory();
    const length = useRef();
    const title = useRef();
      const onClickRoomNumber= () =>{
        axios.get(`http://localhost:5000/test?title=${title.current.value}&length=${length.current.value}`).then((data)=>{
          localStorage.setItem('RoomUrl',data.data.redirect_url);
          history.push(`/room${data.data.redirect_url}`)
        })
      }
  
      return (
          <div>
              <h1>방만들기 페이지</h1>
              <input ref={title} placeholder="방제목을 입력하세요"/>
              <input ref={length} placeholder="달릴 거리를 입력하세요" />
              <button type='button' onClick={onClickRoomNumber} id='roombutton'>버튼</button>
          </div>
      )
  }

export default CreateRoom
