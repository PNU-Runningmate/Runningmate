import React, {useState,useEffect,useRef} from 'react';
import Map from '../components/Map';
import Logbox from '../components/Logbox';
import axios from 'axios';
import { timeout } from '../../node_modules/workbox-core/_private';
import { serverURL } from '../components/modules/ServerConst';

const Infopage = ({ history }) => {
    const RoomPath=RoomState()
   const dateControl = useRef();
   const [list,setlist] = useState([]);
   const click = ()=>{
       axios.get(`${serverURL}/date?rday=${dateControl.current.value}`).then((value)=>setlist(value.data)).catch((e)=>{
           alert(e.response.data.message)
           history.push('/')
        });
   }
    return(
        <div className='background'>
            <div className='previous'>
                최근활동
            </div>
            <div className='statics'></div>
            <br></br>
            <div className='search'>
                {/* <div>검색:</div> */}
                <input ref={dateControl} type="date" className='searchbox'/>
                <button type="submit" onClick={click} className='searchbutton'><AiOutlineSearch/></button>
            </div>
                {list.map((item,i)=>(
                    <Logbox key={i} date={item.createdAt} length={item.length} runningtime={item.runningtime} pace={item.pace} location={item.location} />
                ))}
            
            <div id='bottom-nav-bar'>
                    <button id='nav-button' onClick={()=> {history.push('/main')}}><img src="img/home.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push(`/${RoomPath}`)}}><img src="img/message.png" alt='mypic' className='home_img'></img></button>
                    {/* <button id='nav-button' onClick={()=> {history.push('/friend')}}><img src="img/contact.png" alt='mypic' className='home_img'></img></button> */}
                    <button id='nav-button' onClick={()=> {history.push('/info')}}><img src="img/info.png" alt='mypic' className='home_img'></img></button>
            </div>
        </div>
    )
    }

export default Infopage;