import React,{useRef} from 'react'
import {useHistory} from 'react-router-dom';
import {Button,Card} from 'react-bootstrap'
import axios from 'axios';
import '../styles/CreateRoom.css';
import { serverURL } from '../components/modules/ServerConst';
import { MdArrowBackIos } from "react-icons/md";

const RoomState = ()=>{
  const path = localStorage.getItem("RoomUrl");
  return path? `room${path}` : 'create_room';
}

function CreateRoom(props) {
    const RoomPath = RoomState();
    const history = useHistory();
    const length = useRef();
    const title = useRef();
      const onClickRoomNumber= () =>{
        if(length.current.value === "select"){
          alert('거리를 선택해주세요')
        }else{
          axios.get(`${serverURL}/test?title=${title.current.value}&length=${length.current.value}`).then((data)=>{
            localStorage.setItem('RoomUrl',data.data.redirect_url);
            history.push(`/room${data.data.redirect_url}`)
          }).catch(e=>{
            alert(e.response.data.message)
            history.push('/');
        })
      }
    }
    const myoption=[
      {key:1,name:"1km"},
      {key:3,name:"3km"},
      {key:5,name:"5km"},
      {key:10,name:"10km"},
    ]
  
      return (
          <div>

            <div id='title'>
              <button id='back-btn' onClick={ ()=> {history.goBack()}}><MdArrowBackIos/></button>
              <div id='title2'></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>

            <div id='box'>
              <Card bg="Light" style={{width:'20rem'}} id='card'>
              <Card.Header>방 생성하기</Card.Header>
              <div id='room_title'>방 제목 :</div>
              <input id='roomtitle' ref={title} placeholder="방제목을 입력하세요"/><br/>
              <form>
                <div id='distance'>달릴 거리 :</div>
                <select ref={length} style={{width:'17rem'}} id='select'>
                  <option value="select">달릴 거리를 입력하세요</option>
                  {myoption.map(option=>{
                    return <option key={option.key} value={option.name}>{option.name}</option>
                  })}
                </select>
              </form>

              {/* <input ref={length} type="number" min="1" max="20" placeholder="달릴 거리를 입력하세요" /> */}
              <div id="createbutton">
              <Button type='button' onClick={onClickRoomNumber} id='roombutton' variant="info">확인</Button>
              </div>
            </Card>
            </div>

            <div id='bottom-nav-bar'>
                    <button id='nav-button' onClick={()=> {history.push('/main')}}><img src="img/home.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push(`/${RoomPath}`)}}><img src="img/message.png" alt='mypic' className='home_img'></img></button>
                    {/* <button id='nav-button' onClick={()=> {history.push('/friend')}}><img src="img/contact.png" alt='mypic' className='home_img'></img></button> */}
                    <button id='nav-button' onClick={()=> {history.push('/info')}}><img src="img/info.png" alt='mypic' className='home_img'></img></button>
                </div>      

          </div>
      )
  }

export default CreateRoom