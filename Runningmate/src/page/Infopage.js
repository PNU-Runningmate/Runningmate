import React, {useState,useEffect,useRef} from 'react';
import Map from '../components/Map';
import Logbox from '../components/Logbox';
import axios from 'axios';
import { timeout } from '../../node_modules/workbox-core/_private';
import { serverURL } from '../components/modules/ServerConst';

const Infopage = ({ history }) => {
   const dateControl = useRef();
   const [list,setlist] = useState([]);
   const click = ()=>{
       axios.get(`${serverURL}/date?rday=${dateControl.current.value}`).then((value)=>setlist(value.data)).catch((e)=>{
           alert(e.response.data.message)
           history.push('/')
        });
   }
    return(
        <div>
            <button onClick={ ()=> {history.goBack()}}>뒤로가기</button>
            <div>Statics</div>
            <br></br>
            검색:
            <input ref={dateControl} type="date"/>
            <button type="submit" onClick={click}>제출</button>
            {list.map((item,i)=>(
                <Logbox key={i} date={item.createdAt} length={item.length} runningtime={item.runningtime} pace={item.pace} location={item.location} />
            ))}

        </div>
    )
    }

export default Infopage;