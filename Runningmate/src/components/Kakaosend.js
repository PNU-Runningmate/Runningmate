import React from 'react'
import { clientURL } from './modules/ServerConst'
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
                mobileWebUrl: `${clientURL}/room`,
                webUrl: `${clientURL}/room?`,
              },
            },
            buttons: [
              {
                title: '바로가기',
                link: {
                  mobileWebUrl: `${clientURL}/room${props.url}`,
                  webUrl: `${clientURL}/room${props.url}`,
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
