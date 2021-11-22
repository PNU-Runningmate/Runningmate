import React from 'react'
import { Link } from 'react-router-dom'

function Logbox(props) {
    const {length,runningtime,pace,date,location} = props;
    const slicedDate = date.slice(0,10);
    return (
        <Link to={{
            pathname:`/map`,
            state:{
                location:location
            }
            }}>
        <div style={{width:"80%",height:"100px",backgroundColor:"rgb(245, 245, 245)",borderRadius:"1rem",margin:"10px 0 10px 0",boxShadow:"10px 5px 5px grey"}}>
            <div style={{textAlign:"center"}}>{slicedDate}</div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>km</div>
            <div>시간</div>
            <div>평균페이스</div>
            </div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>{length}</div>
            <div>{runningtime}</div>
            <div>{pace}</div>
            </div>
        </div>
        </Link>
    )
}

export default Logbox
