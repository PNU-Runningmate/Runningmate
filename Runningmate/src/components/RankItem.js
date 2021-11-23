import React from 'react'

function RankItem(props) {
    const {nickname,rank,time} = props
    console.log(time)
    const hour = time.toString().split('.');
    return (
            <div id='rank_elements'>
                <div id='number'>{rank+1}</div>
                <div>{nickname}</div>
                <div>{hour[0]}h</div>
            </div>
    )
}

export default RankItem
