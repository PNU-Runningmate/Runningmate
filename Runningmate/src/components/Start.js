import React,{useState,useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/esm/Spinner'
import '../styles/Start.css';

function Start(props) {
    const [visible, setVisible] = useState(true)
    const stop2 = () => {
        setVisible(false);
    }

    const {Stop,users,Length } = props
    const [loading,setloading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{setloading(false)},2000);
    }, [])

    return (
        <div id='main'>
            {loading
            ? <Spinner id='spinner' animation="border" variant="info"/>
            :users.map((user,i)=>(
                <div key={i}>
                    <div id='info3'>
                        <div id='nickname'>{user.nickname} - </div>
                        <div id='percent'>&nbsp;{Math.round((users[i].distance/Length)*100)}%</div>
                    </div>

                    <div id='bar'>
                    <ProgressBar id='progress' animated now={(users[i].distance/Length)*100} label={`${(users[i].distance/Length)*100}`}/>
                    </div>
                    <br></br>
                    <hr></hr>
                </div>)
            )
            }

            <div id='fin'>
                {visible? <button id='finish_btn' onClick={Stop, stop2}>종료</button> : null}
            </div>
            
        </div>
    )
}

export default Start