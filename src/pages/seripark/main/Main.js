import React,{Component} from 'react';
import MainHeader from './Components/MainHeader/MainHeader';
import MainCon1 from './Components/MainCon1/MainCon1';
import MainCon2 from './Components/MainCon2/MainCon2';
import "./Main.scss"

  class Main extends Component{
    render(){
      return(
        <>
          <MainHeader/>
          <MainCon1/>
          <MainCon2/>
        </>
      )
    }
  }
export default Main;
