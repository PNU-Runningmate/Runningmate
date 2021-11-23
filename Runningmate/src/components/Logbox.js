import React from 'react'
import { Link } from 'react-router-dom'
// import { Style } from '../../node_modules/@material-ui/icons/index';
import '../styles/Logbox.css'



function Logbox(props) {
    const {length,runningtime,pace,date,location} = props;
    const slicedDate = date.slice(0,10);
    // console.log(date)
    const years= date.slice(0,4)
    const months = date.slice(5,7)
    const dates = date.slice(8,10)
    console.log(date)
    console.log(years)
    console.log(months)
    console.log(dates)

    return (
        <Link to={{
            pathname:`/map`,
            state:{
                location:location
            }
            }}
            style={{textDecoration:'none' , color:'black'}}>

            {/* <br/> */}
            <div className='boxcover'>
                <div className='box'>
                    <div className='day'>
                    {slicedDate}
                    <hr/>
                    </div>
                    
                    <div className='history_name'>
                        <div className='history_names'>
                            거리
                        </div>
                        <div className='history_names'>
                            시간
                        </div>
                        <div className='history_names'>
                            평균 페이스
                        </div>
                    </div>
                    <div className='history_element'>
                        <div className='km2'>
                            {length}
                        </div>
                        <div className='average'>
                             {runningtime}
                        </div>
                        <div className='time'>
                           {pace}
                        </div>
                        
                    </div>
                    <hr/>
                    <div>
                    

                    </div>
                </div>
            </div>

        </Link>
        
    )
}

export default Logbox
