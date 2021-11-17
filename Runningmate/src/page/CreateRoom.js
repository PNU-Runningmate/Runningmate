import React,{useEffect,useState,useRef} from 'react'
import {useHistory} from 'react-router-dom';
import {Button,Card} from 'react-bootstrap'
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
          <div style={{display:'flex',justifyContent:"center"}}>
            <Card bg="Light" style={{width:'18rem'}}>
              <Card.Header>방 생성하기</Card.Header>
              <input ref={title} placeholder="방제목을 입력하세요"/><br/>
              <input ref={length} type="number" min="1" max="20" placeholder="달릴 거리를 입력하세요" />
              <Button type='button' onClick={onClickRoomNumber} id='roombutton' variant="info">생성하기</Button>
            </Card>
          </div>
      )
  }

export default CreateRoom
