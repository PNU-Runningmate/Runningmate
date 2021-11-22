import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/esm/Spinner'

function Start(props) {
    const [visible, setVisible] = useState(true)
    const stop2 = () => {
        setVisible(false);
    }

    const {Stop,users,Length } = props
    console.log(users[0].distance)
    return (
        <div>
            {users[0].distance == undefined 
            ? <Spinner animation="border" variant="info" size="L"/>
            :users.map((user,i)=>(
                <div key={i}>
                    <div>{user.nickname}</div>
                    <div>{(users[i].distance/Length)*100}%</div>
                    <ProgressBar animated now={(users[i].distance/Length)*100} label={`${(users[i].distance/Length)*100}`}/>
                </div>)
            )
            }
            {visible? <button onClick={Stop, stop2}>종료</button> : null}
            
        </div>
    )
}

export default Start
