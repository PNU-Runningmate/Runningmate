import React from 'react';

const Friendpage = ({ history }) => {
    return(
        <div>
            <button onClick={ ()=> {history.goBack()}}>뒤로가기</button>
            <br></br>
            여기는 친구목록 페이지!! 아직 미완성
        </div>
    )
}

export default Friendpage;