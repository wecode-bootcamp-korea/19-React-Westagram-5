import React, { Component } from 'react'
import './Login.scss';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Login extends Component {
  // state = {
  //     id: "",
  //     pw: "",
  //     // name:"",
  //     // phone:""
  //   }
  

  // handleInputId = (e) => {
  //   this.setState({id: e.target.value});
  // }

  
  // handleInputPw = (e) => {
  //   this.setState({pw: e.target.value});
  // }
  // handleInputName = (e) => {
  //   this.setState({name: e.target.value});
  // }
  // handleInputPhone = (e) => {
  //   this.setState({phone: e.target.value});
  // }

  // goToMain = (e) => {
  //    e.preventDefault();
  //     fetch("http://10.58.5.24:8000/accounts/login",{
  //       method:'POST',
  //       body:JSON.stringify({
  //         email:this.state.id,
  //         password:this.state.pw,
  //         // name:"seripark",
  //         // phone:"0000000550"
  //       })
  //     })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if(result.MESSAGE === 'SUCCESS'){
  //         alert("성공");
  //         this.props.history.push('/mainsp');
  //       }else{
  //         alert("fail");
  //       }
  //     })
  //   }
    goToMain = () => {
      this.props.history.push('/mainsp');
    }

    inputChange = () => {
      const inputId = document.getElementById('idText');
      const inputPw = document.getElementById('pwText');
      const loginBtn = document.querySelector('#loginBtn');
      const inputIdLength = inputId.value.length;
      const inputPwLength = inputPw.value.length;
  
      (inputIdLength > 0 && inputPwLength > 0 ? loginBtn.classList.add('changeBtn') : loginBtn.classList.remove('changeBtn'));
    }
      
    render() {
      // console.log(this.state.id)
      return (
        <div className="loginBackground">
          <div className="container">
            <div className="loginLogoWrap">
              <h1 className="loginLogoTitle">Westagram</h1>
            </div>
            <form id="loginForm">
              <input type="text" id="idText" name="login_id_text" onChange={this.inputChange} placeholder="전화번호,사용자 이름 또는 이메일"/>
              <input type="text" id="pwText" name="login_pw_text" onChange={this.inputChange} placeholder="비밀번호"/>
              <button id = "loginBtn" type = "submit" onClick={this.goToMain}>로그인</button>
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