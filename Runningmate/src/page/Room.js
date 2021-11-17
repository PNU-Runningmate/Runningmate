import React,{useState,useEffect,useRef} from 'react'
import SocketContext from '../components/modules/SocketContext';
import Kakaosend from '../components/Kakaosend';
import '../styles/Waitingpage.css';
import { useHistory } from 'react-router';
import axios from 'axios';
function SetRoomUrl(){
    const RoomUrl = localStorage.getItem('RoomUrl');
    if(!RoomUrl){
        localStorage.setItem('RoomUrl',window.location.search)
    }
}
function Room() {
    SetRoomUrl()
    const DomReady = useRef();
    const history = useHistory();
    const [ready,setready] = useState(false);
    const RoomName = new URLSearchParams(window.location.search).get('title');
    const Length = new URLSearchParams(window.location.search).get('length');
    const roomId = new URLSearchParams(window.location.search).get('room_id');
    const { socketRef,allReady,users,messages, sendMessage, sendReady, sendStart} = SocketContext(roomId);
    const usercount = users.length;
    const [newMessage,setNewMessage] = useState("");

    console.log('users',users)
    console.log('ready',ready)

    function deleteRoomUrl(){
        localStorage.removeItem('RoomUrl');
        history.push('/main')
    }

    const handleNewMessageChange = (e)=>{
        setNewMessage(e.target.value);
    }
    const Enter = (e)=>{
        if(e.key == "Enter"){
            handleSendMessage();
        }
    }
    const handleSendMessage = ()=>{
        sendMessage(newMessage);
        setNewMessage("");
    }
    const onClick = (e)=>{
        setready(!ready)
        sendReady()
        if(!ready){
            DomReady.current.style.backgroundColor = 'red';
        }else{
            DomReady.current.style.backgroundColor = 'blue';
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/room`)
         .catch(e =>{
             alert(e.response.data.message)
             history.push('/')
         })
    },[])

    return (
        <div>
            <div className="nav">       
                <div className="km">{Length}km</div>
                <div>{RoomName}</div>
                <div className="edit">
                <img id="edit_img" src="img/edit2.jpg" alt="profile" />
                </div>
                <Kakaosend url={window.location.search}/>
                <button onClick={deleteRoomUrl}>나가기</button>
            </div>

            <div className="par-bar">
                <div className="current">현재참여인원:{usercount}명</div>
                <div className="par-box">
                    <div className="par">
                        {/* <img id="profile_img" src="img/profile.jpg" alt="profile" /> */}
                        {/* <img id="profile_img" src="img/hammer.jpg" alt="profile" />
                        <img id="profile_img" src="img/profile.JPG" alt="profile" />
                        <img id="profile_img" src="img/hammer.jpg" alt="profile" /> */}
                    </div>
                    <div className="name">
                    {users.map((username,i)=>(
                        <div key={i} className='myname'>{username.nickname},{username.status? 'Ready':'not ready'}</div>
                    ))}
                    </div>
                    <div className="ready">
                    <button type="button" ref={DomReady} onClick={onClick}>{ready ? '취소':'준비'}</button>
                    {allReady ? (
                    <button onClick={sendStart} >시작</button>
                    ):(<div/>)}
                    </div>
                </div>
            </div>

            <div className="chatting">
                <div className="content">
                    <ul className="messages-list">
                        {messages.map((message,i)=>(
                        <div key={i} className={`message-box-${message.ownedByCurrentUser ? "my-message" : "received-message"}`}>
                        <li key={i} className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"}`}>
                            {message.ownedByCurrentUser ? `${message.body}` : `${message.nickname}:${message.body}`}
                        </li>
                        </div>
                    ))} 
                    </ul>
                    {users.map((username,i)=>(
                        <div key={i} className='myname'>{username.nickname}:{username.distance ? username.distance*1000 : ''}m</div>
                    ))}
                </div>
            </div>

            <div className="chat-bar">
            <input type="text" name="chat" size="32" id="chat-message" placeholder="chatting" onChange={handleNewMessageChange} 
            onKeyPress={Enter} value={newMessage}/>
            <button type="button" id="chat-message2" onClick={handleSendMessage}>전송</button>
            </div>
        </div>
    )
}

export default Room
