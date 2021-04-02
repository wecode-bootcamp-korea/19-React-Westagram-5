import React, { Component } from 'react';


class Logo extends Component {
  render() {
    return (
      <div className="colorBox">
        <h1>Westagram</h1>
        <div className="colorBox2">
          <input className="inputId" type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
          <input className="inputPw" type="password" placeholder="비밀번호" />
          <button className="login">로그인</button>
          <div className="underBox">
            <div className="line"></div>
            <div className="or">또는</div>
            <div className="line"></div>
          </div>
          <button className="faceBook">
            <i className="fab fa-facebook-square"></i>
            <a className="face" href="https://www.facebook.com/login">Facebook으로 로그인</a>
          </button>
          <a className="forGet" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    )
  }
}

export default Logo;