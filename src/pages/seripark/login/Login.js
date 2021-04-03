import React, { Component } from 'react'
import './Login.scss';


class Login extends Component {
    render() {
      return (
        <div class="login_background">
          <div class="container">
            <div class="login_logo_wrap">
              <h1 class="login_logo_title">Instagram</h1>
            </div>
            <form id="login_form" method="get">
              <input type="text" id="id_text" name="login_id_text" placeholder="전화번호,사용자 이름 또는 이메일"/>
              <input type="text" id="pw_text" name="login_pw_text" placeholder="비밀번호"/>
              <input type="submit" id="login_btn" value="로그인"/>
            </form>
            <footer>
              <a href="./" class="find_pw">비밀번호를 잊으셨나요?</a>
            </footer>
          </div>
        </div>      
      )
    }
}

export default Login



