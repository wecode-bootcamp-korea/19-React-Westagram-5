
import React, {Component} from 'react' ;


class Login extends Component {
    render() {
        return (
        <>
            <header>
                <h1> Westagram </h1>
                <main className = "login">
                    <input className = "Id" type = "text" placeholder = "Phone number, username, or email" />
                    <br/>
                    <input className = "Pw" type = "password"  placeholder = "Password" />
                    <br/>
                    <button className = "logInButton" type = "button"></button>
                </main>
                <div className = "orLine">
                    <div className = "sideLine"></div>
                    <div className = "orLetter"> OR </div>
                    <div className = "sideLine"></div>
                </div>
                <nav className = "otherMethod">
                    <div className = "facebook">
                        <a href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221m8wh6j1ptef7i1tvk8zls8sc991gu36x715dghvk15gfprp1gzar4i%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dcca89f78-d25b-4d83-8e32-822d37821a88%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221m8wh6j1ptef7i1tvk8zls8sc991gu36x715dghvk15gfprp1gzar4i%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
                                <i className="fab fa-facebook-square"></i>
                                <span> Log in with Facebook </span>
                        </a>
                    </div>
                    <br/>
                    <div className = "forgotPw">
                        <a href = ""> Forgot password?</a>
                    </div>
                </nav>
            </header>
            <section className = "signUp">
                <span> Don't have an account?
                    <a href = ""> Sign up </a>
                </span>
            </section>
            <div class = "getAppBox">
                <div className = "getAppLetter">
                    <a> Get the app. </a>
                </div>
                <div className = "getAppStore">
                    <a className = "appleStore" href = "https://apps.apple.com/app/instagram/id389801252?vt=lo">
                        <img alt="Available on the App Store" className="apple" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
                    </a>
                    <a className = "goolePlay" href = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D123A4C31-2FE8-41ED-BE7D-3E32E16EEFEF%26utm_content%3Dlo%26utm_medium%3Dbadge">
                        <img alt="Available on Google Play" className= "play" src= "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"/>
                    </a>
                </div>
            </div>
        </>
        )
    }
}

export default Login
