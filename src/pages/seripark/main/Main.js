import React, {Component} from 'react';
import MainHeader from './Components/MainHeader/MainHeader';
import MainCon1 from './Components/MainCon1/MainCon1';
import MainCon2 from './Components/MainCon2/MainCon2';
import Dog from "images/seripark/download.jpg";
  class Main extends Component{
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
export default Main;
