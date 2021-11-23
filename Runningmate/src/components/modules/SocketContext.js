import io from 'socket.io-client'
import React,{useRef,useState,useEffect} from 'react'
import { serverURL } from './ServerConst';
var id;

function SocketContext(roomId,length) {
    const socketRef = useRef();
    const [messages,setMessage] = useState([]);
    const [users,setUsers] = useState([]);
    const [allReady,setallReady] = useState(false);
    const [start,setStart] = useState(false);
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
        socketRef.current = io.connect(`${serverURL}`,{
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
        
        socketRef.current.on('Start',()=>{
            setStart(true);
            id = navigator.geolocation.watchPosition(success,error);
            console.log(id);
        })

        socketRef.current.on('Running',(data)=>{
            setUsers(data);
        })

        socketRef.current.on('arrive',()=>{
            Stop();
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
        console.log('Geolocation Error:Can not get a geo information')
    }

    const sendStart = ()=>{
        // navigator.geolocation.getCurrentPosition(success,error)
        socketRef.current.emit('Loading',length)
    }

    const Stop = ()=>{
        console.log('stop',id);
        navigator.geolocation.clearWatch(id);
        socketRef.current.emit('arrive');
    }


    return {Stop,start,socketRef,allReady,users,messages,sendMessage,sendReady,sendStart};
}

export default SocketContext
