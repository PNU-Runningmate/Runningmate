import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { serverURL } from './modules/ServerConst';
import RankItem from './RankItem';

function Rank() {
    const [option,setoption] = useState('1km');
    const [rank,setrank] = useState([]);
    function change(e){
        setoption(e.target.value)
    }
    useEffect(() => {
        axios.get(`${serverURL}/rank?ranklength=${option}`).then((value)=>setrank(value.data)).catch((e)=>{console.log(e)})
    },[option]);
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

                        {rank.map((item,i)=>(
                            <RankItem key={i} nickname={item.nickname} time={item.runningtime} rank={i}/>
                        ))}

                    </div>
                </div>
    )
}

export default Rank
