import React, {useEffect,useRef, useState} from 'react';
import '../styles/Main.css';
import axios from 'axios'
import {useHistory}  from 'react-router';
import LatestRecord from '../components/LatestRecord';
import Rank from '../components/Rank';
import { serverURL } from '../components/modules/ServerConst';

axios.defaults.withCredentials = true;
const RoomState = ()=>{
    const path = localStorage.getItem("RoomUrl");
    return path? `room${path}` : 'create_room';
}
const Main = (props) => {
        const RoomPath = RoomState();
        const history = useHistory();
        const [nickname,setnickname] = useState('');
        const now= new Date();
        const todayMonth = now.getMonth() + 1;
        const todayDate = now.getDate()
        const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const day0fweek = week[now.getDay()];

        useEffect(()=>{
            axios.get(`${serverURL}/main`).then(data=>{
                setnickname(`안녕하세요 ${data.data.nickname}님`)
        }).catch(e=>setnickname(e.response.data.error))
        },[])

            return(
                <div>
                <div id='up-nav-var'>
                    <div id='helloword'>
                        <div id="username">{nickname}</div>
                       <br></br>
                       <div id='date'>{todayMonth + '-' + todayDate + '-' + day0fweek}</div>
                    </div>
                    <div>
                    <img src="img/profile.JPG" alt='mypic' className="image1"></img>
                    </div>
                </div>
                <LatestRecord/>
                <Rank/>
                


                <div id='bottom-nav-bar'>
                    <button id='nav-button' onClick={()=> {history.push('/main')}}><img src="img/home.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push(`/${RoomPath}`)}}><img src="img/message.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push('/friend')}}><img src="img/contact.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push('/info')}}><img src="img/info.png" alt='mypic' className='home_img'></img></button>
                </div>

                </div>
            )
        }
    
export default Main;