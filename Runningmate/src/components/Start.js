import React,{useState,useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/esm/Spinner'
import '../styles/Start.css';

function Start(props) {
    const [visible, setVisible] = useState(true)
    const {Stop,users,Length } = props
    const length = Number(Length.slice(0,Length.length-2))
    const [loading,setloading] = useState(true);
    const stop2 = () => {
        Stop()
        setVisible(false);
    }
    useEffect(() => {
        setTimeout(()=>{setloading(false)},2000);
    }, [])

    return (
        <div>
            {loading
            ? <Spinner animation="border" variant="info"/>
            :users.map((user,i)=>(
                <div key={i}>
                    <div>{user.nickname}</div>
                    <div>{Math.round((users[i].distance/length)*100)}%</div>
                    <ProgressBar animated now={(users[i].distance/length)*100} label={`${(users[i].distance/length)*100}`}/>
                </div>)
            )
            }
            {visible? <button onClick={stop2}>종료</button> : null}
            
        </div>
    )
}

export default Start