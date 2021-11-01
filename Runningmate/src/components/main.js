import React, {Component,useEffect} from 'react';
import '../styles/Main.css';
import io from "socket.io-client"
const Main = ({ history }) => {
        const socket = io('http://localhost:5000',{withCredentials:true});
        const now= new Date();
        const todayMonth = now.getMonth() + 1;
        const todayDate = now.getDate()
        const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const day0fweek = week[now.getDay()];
        useEffect(()=>{
            const username = document.querySelector("#username");
            socket.on("username",(data)=>{
                username.innerText = `안녕하세요 ${data}님`;
            })
        })


            return(
                <div>
                <div id='up-nav-var'>
                    <div id='helloword'>
                        <div id="username"></div>
                       <br></br>
                       <div id='date'>{todayMonth + '-' + todayDate + '-' + day0fweek}</div>
                    </div>
                    <div>
                    <img src="img/profile.JPG" alt='mypic' className="image1"></img>
                    </div>
                </div>

                <div id='privious'>
                    <div id='record'>
                        <button type='button' className='button'>◀</button>
                        <div>&nbsp;&nbsp;나의 최근 기록&nbsp;&nbsp;</div>
                        <button type='button' className='button'>▶</button>
                    </div>
                    <div id='elements'>
                        <div id='elements_1'>
                            <div>거리</div>
                            <div id='num'>5km</div>
                        </div>
                        <div id='elements_2'>
                            <div>시간</div>
                            <div id='num'>1시간</div>
                        </div>
                        <div id='elements_3'>
                            <div>페이스</div>
                            <div id='num'>5km/h</div>
                        </div>
                    </div>
                </div>

                <div id='postbody'>
                    <div id='rank'>
                        <select className='select_box'>
                            <option>1km</option>
                            <option>3km</option>
                            <option>5km</option>
                            <option>10km</option>
                        </select>
                        <label class='ranking'>&nbsp;구간 순위</label>

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

                <div id='bottom-nav-bar'>
                    <button id='nav-button' onClick={()=> {history.push('/main')}}><img src="img/home.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push('/waiting')}}><img src="img/message.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push('/friend')}}><img src="img/contact.png" alt='mypic' className='home_img'></img></button>
                    <button id='nav-button' onClick={()=> {history.push('/info')}}><img src="img/info.png" alt='mypic' className='home_img'></img></button>
                </div>

                </div>
            )
        }
    
export default Main;