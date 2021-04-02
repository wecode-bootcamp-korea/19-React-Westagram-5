import React, { Component } from 'react';
import Logo from './components/Logo/Logo'
import Membership from './components/Membership/Membership'
import DownLoad from './components/DownLoad/DownLoad'
import './Login.scss'
import './components/DownLoad/DownLoad.scss'
import './components/Logo/Logo.scss'

class LoginSyeongii extends Component {
    render() {
        return (
            <article className="weStagram">
               <Logo/>
                <Membership/>
                <DownLoad/>
            </article>
        )
    }
}

export default LoginSyeongii;