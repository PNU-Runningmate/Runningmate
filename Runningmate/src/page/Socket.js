// import React,{useEffect,useState} from 'react'
// import queryString from "query-string"
// import {Link} from 'react-router-dom';

// const addUser = (user)=>{
//   const ul = document.querySelector("#user");
//   const li = document.createElement("li");
//   li.innerText = user;
//   ul.appendChild(li);
// }

// const addMessage = (msg)=>{
//   const msgul = document.querySelector("#message");
//   const msgli = document.createElement('li');
//   msgli.innerText = msg;
//   msgul.appendChild(msgli);
// }
// function Socket(props) {
//     const query = queryString.parse(props.location.search);
//     const [message, setMessage] = useState("");
//     const onChangeMessage = (e) => setMessage(e.target.value);

//     const onClick = () => {
//       socket.emit("new_message",message,query.id,()=>{
//         addMessage(message)
//       })
//       setMessage("");
//     };

//     const onKeyPress = (e) => {
//       if (e.key === "Enter") {
//         onClick();
//       }
//     };

    
//     useEffect(() => {
//         socket.on("EnterUser",addUser);
//         socket.on("new_message",addMessage);
//         socket.emit('EnterRoom',query.id);
//         return()=>{
//         }
//     },[query.id])
//     return (
//         <div>
//             <div>
//               참여자목록
//               <ul id="user"></ul>
//             </div>
//             <div>
//               대화목록
//               <ul id="message"></ul>
//             </div>
//             <div className="chat-bar">
//               <input
//                 type="text"
//                 name="chat"
//                 size="32"
//                 id="chat-message"
//                 placeholder="chatting"
//                 onChange= {onChangeMessage}
//                 value={message}
//                 onKeyPress={onKeyPress}
//               ></input>
//               <button type="button" id="chat-message2" onClick={onClick}>
//                 전송
//               </button>
//           </div>
//         </div>
//     )
// }
// const sendLink = ()=> {
//   window.Kakao.Link.sendDefault({
//     objectType: 'feed',
//     content: {
//       title: '러닝메이트',
//       description: '함께 달려요 헐떡헐떡',
//       imageUrl:
//         'null',
//       link: {
//         mobileWebUrl: `http://localhost:3000/room?id=${query.id}`,
//         webUrl: `http://localhost:3000/room?id=${query.id}`,
//       },
//     },
//     buttons: [
//       {
//         title: '바로가기',
//         link: {
//           mobileWebUrl: `http://localhost:3000/room?id=${query.id}`,
//           webUrl: `http://localhost:3000/room?id=${query.id}`,
//         },
//       },
//     ],
//   })
// }
// <button id="kakao-link-btn" onClick={sendLink}>
// <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"/>
// </button>

// export default Socket
