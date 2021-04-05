import React,{Component} from 'react';
import MainHeader from './Components/MainHeader/MainHeader';
import MainCon1 from './Components/MainCon1/MainCon1';
import MainCon2 from './Components/MainCon2/MainCon2';

  class Login extends Component{
    render(){
      return(
        <>
        <MainHeader/>
        <div className="mainContents">
        <MainCon1/>
        <MainCon2/>
        </div>
        </>
      )
    }
  }
export default Login;