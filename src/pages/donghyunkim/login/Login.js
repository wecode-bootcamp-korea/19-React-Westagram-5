import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import '../../../styles/reset.scss'
import './Login.scss'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            disValue:true,
            loginButtonClassName:'loginOff',
            inputId:'',
            inputPass:''
        }
        // this.props.loginButton.disable = false;
        // loginButton.disable = false;
    }

    goToMain = () => {
        console.log(this.props.history);
        this.props.history.push('/maindh');
        console.log(this.props.history);
    }
    /*
    inputPasswdKeydown =  (e) => {
        
        const loginButton = document.getElementById('login-button');
        let passwdInput = document.getElementById('passwd-input');
        const userId = document.getElementById('userId-input');
        const password = document.getElementById('passwd-input');
        let idLength = userId.value.length;
        let passwdLength =password.value.length;

        if(idLength === 0 ){
            alert('아이디부터 입력해주세요');
            userId.focus();
            password.value = "";
            return;
        }
        if(idLength >= 0 && passwdLength >= 0){
            loginButton.style.backgroundColor = 'blue';
            this.setState({
                disValue:false
            });
        }else{
            this.setState({
                disValue:true
            });
        }
    } */

    handleInputId = (e) => {
        this.setState({
            inputId : e.target.value
        });
        
        if(e.target.value.indexOf('@') > -1 && this.state.inputPass.length > 4) {
            this.setState({
                disValue:false
            });
        }else{
            this.setState({
                disValue:true
            });
        }
    }

    handleInputPass = (e) => {
        this.setState({
            inputPass : e.target.value
        });

        console.log('------');
        console.log(this.state.inputId);
        console.log(this.state.inputPass);
        console.log(this.state.inputId.indexOf('@'));
        console.log(e.target.value);
        if(this.state.inputId.indexOf('@') > -1 && e.target.value.length > 4) {
            this.setState({
                disValue:false
            });
        }else{
            this.setState({
                disValue:true
            });
        }
    }

    render() {
        return (
            <>
            <div id="mainRight-box">
                <section>
                    <h1>Westagram</h1>
                    <input class="sectionInput-width" id="userId-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange={this.handleInputId}
                    />
                    <input class="sectionInput-width" id="passwd-input"  type="password" placeholder="비밀번호"
                    onChange={this.handleInputPass}
                    onKeyDown={this.inputPasswdKeydown}
                    />
                    <button className={'sectionInput-width loginButton ' + (this.state.disValue ? 'loginOff' : 'loginOn') } 
                    onClick={this.goToMain}
                    disabled={this.state.disValue}
                    >로그인</button>
                    <div class="sectionInput-width orBox">
                        <div></div>
                        <span>또는</span>
                        <div></div>
                    </div>
                    <div class="sectionInput-width login-facebook">
                        <span></span><a>facebook으로 로그인</a>
                    </div>
                    <div class="sectionInput-width" id="fogot-passwd"><a>비밀번호를 잊으셨나요?</a></div>
                </section>
                <div class="section-width" id="sign-up">
                    <p>계정이 없으신가요? <a>가입하기</a></p>
                </div>
                <div class="section-width" id="app-down">
                    <p class="section-width">앱을 다운로드하세요.</p>
                    <div id="app-img" class="section-width">
                        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
                            <img id="appleAppDown-img" alt="appStore-img" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D71BEE229-CA65-4AC9-A2B9-1D96F1BC3214%26utm_content%3Dlo%26utm_medium%3Dbadge">
                            <img id="googleAppDown-img" alt="googlePlay-img" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"/>
                        </a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(Login); 
