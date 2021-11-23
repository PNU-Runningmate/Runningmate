import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/esm/Spinner'
import '../styles/Start.css';

function Start(props) {
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
            <button onClick={Stop}>종료</button>
        </div>
    )
}

export default Start