import React,{useEffect,useState} from 'react'
import axios from 'axios'


function Map(props) {
    const {kakao} = window;
    const {location} = props.location.state
    const create = ()=>{
        let container = document.getElementById("map");
    
        let options = {
          center: new kakao.maps.LatLng(35.229197, 129.089272),
          level: 8,
        };
    
        let map = new kakao.maps.Map(container, options);
        var linePath = [];
        location.map(item=>{
            linePath.push(new kakao.maps.LatLng(item.latitude,item.longitude))
        })
        var polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FFAE00', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        polyline.setMap(map)
    }
    useEffect(() => {
        create()

    }, [])
    // function setCenter(){
    //     var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
    
    //     // 지도 중심을 이동 시킵니다
    //     map.setCenter(moveLatLon);
    // }
    return (
        <div>
            <div id="map" style={{width:"500px",height:"400px"}}></div>
        </div>
    )
}

export default Map
