import React, { Component } from 'react'
import './Login.scss';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Login extends Component {
  
    goToMain = () => {
    this.props.history.push('/mainsp');
    }
    inputAction = () => {
      const inputId = document.getElementById('idText');
      const inputPw = document.getElementById('pwText');
      const loginBtn = document.querySelector('#loginBtn');
      const inputIdLength = inputId.value.length;
      const inputPwLength = inputPw.value.length;
      (inputIdLength > 0 && inputPwLength > 0 ? loginBtn.classList.add('changeBtn') : loginBtn.classList.remove('changeBtn'));
  }

    render() {
      return (
        <div className="loginBackground">
          <div className="container">
            <div className="loginLogoWrap">
              <h1 className="loginLogoTitle">Instagram</h1>
            </div>
            <form id="loginForm" method="get">
              <input type="text" id="idText" name="login_id_text" onChange={this.inputAction}placeholder="전화번호,사용자 이름 또는 이메일"/>
              <input type="text" id="pwText" name="login_pw_text" onChange={this.inputAction}placeholder="비밀번호"/>
              <button id = "loginBtn" type = "button" onClick={this.goToMain}>로그인</button>
            </form>
            <footer>
              <Link to="/Main"  className="findPw">비밀번호를 잊으셨나요?</Link>
            </footer>
          </div>
        </div>      
      )
    }
}

export default withRouter(Login)