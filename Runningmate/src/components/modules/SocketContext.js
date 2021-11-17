import io from 'socket.io-client'
import React,{useRef,useState,useEffect} from 'react'

function SocketContext(roomId) {
    const socketRef = useRef();
    const [messages,setMessage] = useState([]);
    const [users,setUsers] = useState([]);
    const [allReady,setallReady] = useState(false);
    const CheckForStart = (users)=>{
        let count = 0
        for(let i of users){
            if(i.status){
                count+=1;
            }
        }
        if(users.length>0 && count===users.length){
            setallReady(true);
        }else{
            setallReady(false);
        }
    }
    useEffect(() => {
        socketRef.current = io.connect("http://localhost:5000",{
            query:{roomId},
            withCredentials:true
        });
        socketRef.current.emit('newUser')
        socketRef.current.on('Ready',(data)=>{
            setUsers(data);
        })
        socketRef.current.on('newChatMessage',(message)=>{
            console.log(message);
            const incomingMessage = {
                ...message,
                ownedByCurrentUser : message.senderId === socketRef.current.id,
            };
            setMessage((messages)=>[...messages,incomingMessage]);

        })
        socketRef.current.on('newUser',(data)=>{
            setUsers(data);
        })

        socketRef.current.on('Running',(data)=>{
            setUsers(data);
        })
        socketRef.current.on('userLeave',()=>{
            socketRef.current.emit('newUser')
            })
        return () => {
            socketRef.current.disconnect();
        }
    }, [roomId])

    useEffect(()=>{
        CheckForStart(users)
    },[users])


    const sendReady = (data)=>{
        socketRef.current.emit('Ready')
    }
    const sendMessage = (message)=>{
        socketRef.current.emit('newChatMessage',{
            body:message,
            senderId:socketRef.current.id,
        });
    }

    function success(position){
        const data = {"latitude":position.coords.latitude, "longitude":position.coords.longitude}
        console.log(data)
        socketRef.current.emit('Start',data)
    }
    function error(){
        console.log('태일아 조떄성~~~~')
    }
    const sendStart = ()=>{
        // navigator.geolocation.getCurrentPosition(success,error)
        navigator.geolocation.watchPosition(success,error);
        console.log('로딩중중중')
    }


    return {socketRef,allReady,users,messages,sendMessage,sendReady,sendStart};
}

export default SocketContext
