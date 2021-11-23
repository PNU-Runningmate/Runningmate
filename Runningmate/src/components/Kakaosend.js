import React from 'react';
import '../styles/Waitingpage.css';

function Kakaosend(props) {
    const sendLink = ()=> {
          window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: '러닝메이트',
              description: '함께 달려요 헐떡헐떡',
              imageUrl:
                'null',
              link: {
                mobileWebUrl: `http://localhost:3000/room`,
                webUrl: `http://localhost:3000/room?`,
              },
            },
            buttons: [
              {
                title: '바로가기',
                link: {
                  mobileWebUrl: `http://localhost:3000/room${props.url}`,
                  webUrl: `http://localhost:3000/room${props.url}`,
                },
              },
            ],
          })
        }
    return (
        <button id="kakao-link-btn" onClick={sendLink}>
            초대하기
        </button>
    )
}

export default Kakaosend;
