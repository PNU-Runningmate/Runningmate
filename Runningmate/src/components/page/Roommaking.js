import React, { useState } from 'react';
import { Redirect } from 'react-router';

// let roomNumber = localStorage.getItem('roomNumber');

const Roommaking = () => {
    const [roomId,setRoomId] = useState('')
    const [roomNumber,setRoomNumber] = useState(localStorage.getItem('roomNumber') ? localStorage.getItem('roomNumber') : '')
    console.log(roomNumber)
    if (roomNumber){
        console.log('fsdafads')
        
        return <Redirect to = "/waiting" />
    }
    const onChangeMessage = (e) => setRoomId(e.target.value);
    const onClickRoomNumber= () =>{
        localStorage.setItem('roomNumber',roomId)
        console.log('roomId 세팅 완료')
        setRoomNumber(localStorage.getItem('roomNumber'))
        console.log(roomNumber)
        console.log('roomNumber세팅완료')
    }
    const onClickDelete=() =>{
        localStorage.removeItem('roomNumber');
        setRoomNumber(localStorage.getItem('roomNumber'))
        console.log(roomNumber);
        return <Redirect to ='/waiting' />
    }
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
          onClickRoomNumber();
        }
      };
    return (
        <div>
            방만들기 페이지
            <input
            size="32"
            onKeyPress={onKeyPress}
            onChange={onChangeMessage}/>
            <button type='button' onClick={onClickRoomNumber} id='roombutton'>
                전송
            </button>
            <button onClick={onClickDelete}>
                지우기
            </button>
        </div>
    );
};

export default Roommaking;