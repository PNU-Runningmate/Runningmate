import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import { serverURL } from './modules/ServerConst';

function Rank() {
    const [option,setoption] = useState('1km');
    function change(e){
        setoption(e.target.value)
    }
    axios.get(`${serverURL}/rank?ranklength=${option}`).then((value)=>{console.log(value.data)}).catch((e)=>{console.log(e)})
    console.log(option)
    return (
                <div id='postbody'>
                    <div id='rank'>
                        <select className='select_box' onChange={change}>
                            <option>1km</option>
                            <option>3km</option>
                            <option>5km</option>
                            <option>10km</option>
                        </select>
                        <label className='ranking'>&nbsp;구간 순위</label>

                        <div id='rank_elements1'>
                            <div>순위</div>
                            <div>이름</div>
                            <div>기록</div>
                        </div>
                        <div id='rank_elements'>
                            <div id='number'>&nbsp;1</div>
                            <div>&nbsp;&nbsp;&nbsp;김ㅇㅇ</div>
                            <div>0h 40m</div>
                        </div>
                        <div id='rank_elements'>
                            <div id='number'>&nbsp;2</div>
                            <div>&nbsp;&nbsp;&nbsp;박ㅇㅇ</div>
                            <div>0h 40m</div>
                        </div>
                        <div id='rank_elements'>
                            <div id='number'>&nbsp;3</div>
                            <div>&nbsp;&nbsp;&nbsp;이ㅇㅇ</div>
                            <div>0h 40m</div>
                        </div>
                        <div id='rank_elements'>
                            <div id='number4'>&nbsp;4</div>
                            <div>&nbsp;&nbsp;&nbsp;최ㅇㅇ</div>
                            <div>0h 40m</div>
                        </div>
                        <div id='rank_elements'>
                            <div id='number4'>&nbsp;5</div>
                            <div>&nbsp;&nbsp;&nbsp;이ㅇㅇ</div>
                            <div>0h 40m</div>
                        </div>
                    </div>
                </div>
    )
}

export default Rank
