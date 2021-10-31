import React, {Component} from 'react';

const Infopage = ({ history }) => {
    return(
        <div>
            <button onClick={ ()=> {history.goBack()}}>뒤로가기</button>
            <br></br>
            여기는 개인 프로필 페이지!! 아직 미완성
        </div>
    )
}

export default Infopage;