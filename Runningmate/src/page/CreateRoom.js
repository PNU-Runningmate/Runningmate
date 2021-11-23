import React,{useEffect,useState,useRef} from 'react'
import {useHistory} from 'react-router-dom';
import {Button,Card} from 'react-bootstrap'
import axios from 'axios';
import { serverURL } from '../components/modules/ServerConst';

function CreateRoom(props) {
    const history = useHistory();
    const length = useRef();
    const title = useRef();
      const onClickRoomNumber= () =>{
        axios.get(`${serverURL}/test?title=${title.current.value}&length=${length.current.value}`).then((data)=>{
          localStorage.setItem('RoomUrl',data.data.redirect_url);
          history.push(`/room${data.data.redirect_url}`)
        }).catch(e=>{
          alert(e.response.data.message)
          history.push('/');
        })
    }
    const myoption=[
      {key:1,name:"1"},
      {key:3,name:"3"},
      {key:5,name:"5"},
      {key:10,name:"10"},
    ]
  
      return (
          <div style={{position:'absolute', left:"50%", transform:"translate(-50%)"}}>

            <div>
            <button onClick={ ()=> {history.goBack()}}>뒤로가기</button>
            </div>

            <Card bg="Light" style={{width:'18rem'}}>
              <Card.Header>방 생성하기</Card.Header>
              <input ref={title} placeholder="방제목을 입력하세요"/><br/>
              <form>
                <select ref={length} style={{width:'18rem'}}>
                  <option value="select">달릴 거리를 입력하세요</option>
                  {myoption.map(option=>{
                    return <option key={option.key} value={option.name}>{option.name}</option>
                  })}
                </select>
              </form>

              {/* <input ref={length} type="number" min="1" max="20" placeholder="달릴 거리를 입력하세요" /> */}
              <Button type='button' onClick={onClickRoomNumber} id='roombutton' variant="info">생성하기</Button>
            </Card>
          </div>
      )
  }

export default CreateRoom