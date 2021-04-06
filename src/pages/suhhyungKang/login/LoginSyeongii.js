import React, { Component } from 'react';
import Logo from './components/Logo/Logo'
import Membership from './components/Membership/Membership'
import DownLoad from './components/DownLoad/DownLoad'
import './LoginSyeongii.scss'
import './components/DownLoad/DownLoad.scss'
import './components/Logo/Logo.scss'
import './components/Membership/Membership.scss'

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