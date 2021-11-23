import React,{useState,useRef} from 'react'
import SocketContext from '../components/modules/SocketContext';
import '../styles/Waitingpage.css';
import Kakaosend from '../components/Kakaosend';

function Chat(props) {
    const roomId = new URLSearchParams(window.location.search).get('room_id');
    const DomReady = useRef();
    const [ready,setready] = useState(false);
    const [newMessage,setNewMessage] = useState("");
    const { allReady,users,messages, sendMessage, sendReady, sendStart, socketRef} = props
    const usercount = users.length;

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
            DomReady.current.style.backgroundColor = 'lightgray';
        }else{
            DomReady.current.style.backgroundColor = '#67BDEC';
        }
    }
    const showstart = ()=>{
        if(allReady){
            console.log(socketRef.current.id)
            console.log(users[0].socket_id)
            if(users[0].socket_id == socketRef.current.id){
                return true
            }
        }
        return false
    }
    return (
        <div>
            <div className="par-bar">
                <div className="current">현재참여인원: {usercount}명</div>
                <div className="par-box">
                    <div className="par">
                        {/* <img id="profile_img" src="img/profile.jpg" alt="profile" /> */}
                        {/* <img id="profile_img" src="img/hammer.jpg" alt="profile" />
                        <img id="profile_img" src="img/profile.JPG" alt="profile" />
                        <img id="profile_img" src="img/hammer.jpg" alt="profile" /> */}
                    </div>
                    <div className="name">
                    {users.map((username,i)=>(
                        <div id='ready_state'>
                        <div key={i} className='myname'>{username.nickname}</div>
                        <div key={i} className='myname2'>{username.status? 'Ready':''}</div>
                        </div>
                    ))}
                    </div>
                    <div className="ready">
                    <button id= 'cancel_btn' type="button" ref={DomReady} onClick={onClick}>{ready ? '취소':'준비'}</button>
                    {showstart() ? (<button id='start_btn' onClick={sendStart}>시작</button>):(<div/>)}
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

export default Chat
