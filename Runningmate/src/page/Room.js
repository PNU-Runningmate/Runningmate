import React,{useState,useEffect} from 'react'
import SocketContext from '../components/modules/SocketContext';
import Kakaosend from '../components/Kakaosend';
import Chat from '../components/Chat';
import Start from '../components/Start';
import '../styles/Waitingpage.css';
import { useHistory } from 'react-router';
import axios from 'axios';
import { MdArrowBackIos } from "react-icons/md";
import { serverURL } from '../components/modules/ServerConst';


function SetRoomUrl(){
    const RoomUrl = localStorage.getItem('RoomUrl');
    if(!RoomUrl){
        localStorage.setItem('RoomUrl',window.location.search)
    }
}
function Room() {
    SetRoomUrl()
    const history = useHistory();
    const RoomName = new URLSearchParams(window.location.search).get('title');
    const Length = new URLSearchParams(window.location.search).get('length');
    const roomId = new URLSearchParams(window.location.search).get('room_id');
    const { users,start,allReady,messages, sendMessage, sendReady, sendStart, Stop} = SocketContext(roomId,Length);

    console.log('users',users)

    function deleteRoomUrl(){
        localStorage.removeItem('RoomUrl');
        history.push('/main')
    }


    useEffect(() => {
        axios.get(`${serverURL}/room`)
         .catch(e =>{
             alert(e.response.data.message)
             history.push('/')
         })
    },[])

    return (
        <div>
            <div className="nav"> 
                <button id='back' onClick={deleteRoomUrl}><MdArrowBackIos/></button>
                <div className="km">{Length}km</div>
                <div>{RoomName}</div>
                <div className="edit">
                {/* <img id="edit_img" src="img/edit2.jpg" alt="profile" /> */}
                </div>
                <Kakaosend url={window.location.search}/>
            </div>
            {start ? (<Start users={users} Stop={Stop} Length={Length}/>) :
             (<Chat users={users} allReady={allReady} messages={messages} sendMessage={sendMessage} sendReady={sendReady} sendStart={sendStart}/>)}
        </div>
    )
}

export default Room
