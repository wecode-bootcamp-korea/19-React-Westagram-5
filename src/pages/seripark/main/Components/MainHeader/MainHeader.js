import React, {Component} from 'react';
import "../MainHeader/MainHeader.scss";
import Cat from "images/seripark/download2.jpg"

class MainHeader extends Component{
    
    render(){
        return(
            <header className="mainLogoWrap">
                <div className="innerWrap">
                    <div className="mainLogo">westagram</div>
                    <div className="hIconWrap">
                        <i className="fas fa-home"></i>
                        <i className="far fa-paper-plane"></i>
                        <i className="far fa-compass"></i>
                        <i className="far fa-heart"></i>
                        <img src={Cat} alt="#"/>
                        <ul className="profile">
                            <li><i className="far fa-user-circle"></i>프로필</li>
                            <li><i className="far fa-bookmark"></i>저장됨</li>
                            <li><i className="fas fa-cog"></i>설정</li>
                            <li><i className="fas fa-sync"></i>계정 전환</li>
                            <li>로그아웃</li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
export default MainHeader;