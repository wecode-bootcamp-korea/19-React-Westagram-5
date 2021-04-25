import React from 'react' ;
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import './Login.scss';


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            inputIdValue: '',
            inputPwValue: '',
        }       
};
handleIdInput = e => {
    this.setState({
        inputIdValue: e.target.value
    })
};

handlePwInput = e => {
    this.setState({
        inputPwValue: e.target.value
    })
};

goToMain = () => {
    this.props.history.push('/mainsd');
}

       /* 백엔드와 통신할 때 사용
        this.state = {
            id: '',
            pw: '',
            name: 'hregre',
            phone_number: '234234234'
        }
    }
    
    changeValue = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   goToMain = () => {
        // this.props.history.push('/mainsd');
       fetch("http://10.58.2.36:8000/users/signin", {
            method: "POST",
            body: JSON.stringify({
              email: this.state.id,
              password: this.state.pw,
              name: this.state.name,
              phone_number: this.state.phone_number
            })
        })    
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if(result.MESSAGE === 'SUCCESS'){
                    alert('성공!!'); 
                    localStorage.setItem('getToken', result.ACCESS_TOKEN)
                    
                    this.props.history.push('/mainsd');
                } else{
                    alert('바보');
                }
            }
        );
        */
   

    

    render() {
        const isBtnAble = this.state.inputIdValue.includes('@') && this.state.inputPwValue.length > 5 ? 'onColor':'offColor';
        return (
       <div className = "login">
            <main className = "inputUser">
                <div className = "header">
                    <h1> Westagram </h1>
                </div>
                <form className = "inputUserInfo" onChange={this.changeValue}>
                    <input className = "Id" name='id' type = "text" placeholder = "Phone number, username, or email" value = {this.state.inputIdValue} onChange = {this.handleIdInput} />
                    <input className = "Pw" name='pw' type = "password"  placeholder = "Password" value = {this.state.inputPwValue} onChange = {this.handlePwInput} />
                    <button className = {isBtnAble + " logInButton"} type = "button" onClick={this.goToMain}>
                    Log In       
                    </button>
                </form>
                <div className = "orLine">
                    <div className = "sideLine"></div>
                    <div className = "orLetter"> <Link to="/Mainsd">OR</Link> </div>
                    <div className = "sideLine"></div>
                </div>
                <nav>
                    <div className = "facebook">
                        <FontAwesomeIcon icon ={faFacebookSquare} className = "facebookIcon" />
                        <span className = "loginFaceBook"> Log in with Facebook </span>
                    </div>
                    <div className = "forgotPw">
                        <Link to="/Mainsd">Forgot password?</Link>
                    </div>
                </nav>
            </main>    
            <section className = "signUpTo">
                    <span className = "DonHave"> Don't have an account?</span>
                    <span className= "sign"> Sign up</span>
            </section>
            <form className = "getAppBox">
                <div className = "getAppLetter">
                    <a href = "https://apps.apple.com/app/instagram/id389801252?vt=lo" className = "getA"> Get the app. </a>
                </div>
                <div className = "getAppStore">
                    <a className = "appleStore" href = "https://apps.apple.com/app/instagram/id389801252?vt=lo">
                        <img alt="Available on the App Store" className="apple" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
                    </a>
                    <a className = "goolePlay" href = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D123A4C31-2FE8-41ED-BE7D-3E32E16EEFEF%26utm_content%3Dlo%26utm_medium%3Dbadge">
                        <img alt="Available on Google Play" className= "play" src= "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"/>
                    </a>
                </div>
            </form>
        </div>
        );
    }
}

export default withRouter(Login)
