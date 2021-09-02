import React, { Component } from 'react';

class KakaoLogin extends Component {
    componentDidMount() {
        const kakaoScript = document.createElement("script");
        kakaoScript.src="http://developers.kakao.com/sdk/js/kakao.min.js";
        document.head.appendChild(kakaoScript);

        kakaoScript.onload= () => {
            window.Kakao.init("49f0a7b5daccbf5091b321e54ee0a489");  //자바스크립트 키
            window.Kakao.Auth.createLoginButton({
                container: '#kakao-login-btn',
                success: (auth) => {
                    console.log('로그인 완료', auth);
                    // 카카오 로그인 성공시
                    window.Kakao.API.request({
                        url: "/v2/user/me",
                        success: (res) => {
                            console.log('kakao 사용자 정보',res);
                            alert('로그인에 성공했습니다!')
                        },
                        fail: (err) => {
                            console.log(err);
                        },
                    });
                },
                fail: (err) => {
                    console.log(err);
                },
            });
        };
    }

    render() {
        return <button type='button' id='kakao-login-btn' style={{backgroundColor:'white', border:'none', width: '100%', margin: '0px auto', marginTop:'5px'}}></button>;
    }
}

export default KakaoLogin;
