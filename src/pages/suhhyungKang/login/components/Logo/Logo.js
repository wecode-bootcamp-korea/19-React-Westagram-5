import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare } from "@fortawesome/free-brands-svg-icons";


class Logo extends Component {

  goToMain = () => {

    this.props.history.push('/mainsyeongii');
  }

  inputAction = () => {
    const inputId = document.getElementsByClassName('inputId')[0];
    const inputPw = document.getElementsByClassName('inputPw')[0];
    const loginBtn = document.querySelector('.login');
    const inputIdLength = inputId.value.length;
    const inputPwLength = inputPw.value.length;

    (inputIdLength > 0 && inputPwLength > 0 ? loginBtn.classList.add('changeBtn') : loginBtn.classList.remove('changeBtn'));
  }

  render() {
    return (
      <div className="colorBox">
        <h1>Westagram</h1>
        <div className="colorBox2">
          <input className="inputId" type="text" onChange={this.inputAction} placeholder="전화번호,사용자 이름 또는 이메일" />
          <input className="inputPw" type="password" onChange={this.inputAction} placeholder="비밀번호" />
          <button className="login" type = "button" onClick = { this.goToMain } >로그인</button>
          <div className="underBox">
            <div className="line"></div>
            <Link to ="/MainSyeongii"><div className="or">또는</div></Link>
            <div className="line"></div>
          </div>
          <button className="faceBook">
            <FontAwesomeIcon icon={faFacebookSquare} className="faFacebookSquare" />

            
            <a className="face" href="https://www.facebook.com/login">Facebook으로 로그인</a>
          </button>
          <a className="forGet" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    )
  }

}
  

export default withRouter (Logo);