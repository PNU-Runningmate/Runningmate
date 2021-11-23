import React,{useEffect,useState} from 'react'
import { serverURL } from './modules/ServerConst';
import axios from 'axios'

function LatestRecord() {
    const [length,setlength] = useState('');
    const [time,settime] = useState('');
    const [ pace,setpace] = useState('');
    
    useEffect(() => {
        axios.get(`${serverURL}/latest`).then((value)=>{
            console.log(value.data.latest_record)
            setlength(value.data.latest_record.length);
            settime(value.data.latest_record.runningtime);
            setpace(value.data.latest_record.pace);
        }).catch((e)=>{
            console.log(e);
        })
    }, [])
    return (
        <div>
                <div id='privious'>
                    <div id='record'>
                        <button type='button' className='button'>◀</button>
                        <div>&nbsp;&nbsp;나의 최근 기록&nbsp;&nbsp;</div>
                        <button type='button' className='button'>▶</button>
                    </div>
                    <div id='elements'>
                        <div id='elements_1'>
                            <div>거리</div>
                            <div id='num'>{length}km</div>
                        </div>
                        <div id='elements_2'>
                            <div>시간</div>
                            <div id='num'>{time}시간</div>
                        </div>
                        <div id='elements_3'>
                            <div>페이스</div>
                            <div id='num'>{pace}km/h</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default LatestRecord
