import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <article className="weStagram">
            <div className="colorBox">
                <h1>Westagram</h1>
                <div className="colorBox2">
                    <input className="inputId" type="text" placeholder="전화번호,사용자 이름 또는 이메일"/>
                    <input className="inputPw" type="password" placeholder="비밀번호"/>
                    <button className="login">로그인</button>
                    <div className="underBox">
                        <div className="line"></div>
                        <div className="or">또는</div>
                        <div className="line"></div>
                    </div>
                </div>
                <button className="faceBook">
                    <i className="fab fa-facebook-square"></i>
                    <a className="face" href="https://www.facebook.com/login">Facebook으로 로그인</a>
                </button>
                <a className="forGet" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
            </div>
            <div className="memberShip">"
                <p className="none">계정이 없으신가요?
                    <a href="https://www.instagram.com/accounts/emailsignup/">
                        <span className="hi">가입하기</span></a>
                </p>
            </div>
            <div className="app">
            <div className="downLoad">
                <p className="appDown">앱을 다운로드 하세요.</p>
                <div className="appleApp">
                    <a className="apple"
                        href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"></a>
                    <img alt="App Store에서 이용 가능" className="Rt8TI "
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"/>
                    <a className="z1VUo"
                        href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9D19A601-1584-40B9-9526-362AC1660D49%26utm_content%3Dlo%26utm_medium%3Dbadge">
                        <img alt="Google Play에서 이용 가능" className="Rt8TI "
                            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"/></a>
                </div>
            </div>
        </div>
        </article>
    )
  }
}

export default Login;