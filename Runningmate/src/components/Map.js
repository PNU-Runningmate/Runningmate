import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import '../styles/Map.css';
import { MdArrowBackIos } from "react-icons/md";
import {useHistory} from 'react-router-dom';
import Logbox from '../components/Logbox';

const RoomState = ()=>{
    const path = localStorage.getItem("RoomUrl");
    return path? `room${path}` : 'create_room';
}

function Map(props) {
    const RoomPath = RoomState();
    const history = useHistory();
    // const dateControl = useRef();
    const [list,setlist] = useState([]);
    const {kakao} = window;
    const {location,pace,length,runningtime,date} = props.location.state
    const setdate = date.toString().split("T")
    const create = ()=>{
        let container = document.getElementById("map");
    
        let options = {
          center: new kakao.maps.LatLng(location[0].latitude, location[0].longitude),
          level: 2,
        };
    
        let map = new kakao.maps.Map(container, options);
        var linePath = [];
        location.map(item=>{
            linePath.push(new kakao.maps.LatLng(item.latitude,item.longitude))
        })
        var polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FFAE00', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        polyline.setMap(map)
    }
    useEffect(() => {
        create();
        
    }, [])

    // function setCenter(){
    //     var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
    
    //     // 지도 중심을 이동 시킵니다
    //     map.setCenter(moveLatLon);
    // }
    return (
        <div>
            <div id='title2'>
                <button id='back-btn' onClick={ ()=> {history.goBack()}}><MdArrowBackIos/></button>
                <div id='title-name'>{setdate[0]}</div>
                <div>&nbsp;&nbsp;&nbsp;</div>
            </div>

            {/* <div id='date2'>{date}</div> */}


            <div id='info'>
            <div id='len'>킬로미터</div>
            <div id='time'>시간</div>
            <div id='pace'>평균 페이스</div>
            </div>

            <div id='info2'>
            <div id='len2'>&nbsp;&nbsp;&nbsp;{length}</div>
            <div id='time2'>&nbsp;&nbsp;&nbsp;{runningtime}</div>
            <div id='pace2'>{pace}</div>
            </div>

            <div>
                <div id="map" style={{width:"415px",height:"425px"}}></div>
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

export default Map