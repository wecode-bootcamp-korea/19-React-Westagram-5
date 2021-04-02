import React, {Component} from 'react';

class MainHeader extends Component{
    render(){
        return(
            <header>
                <div class="logo">westagram</div>
                <div class="header_inner_wrap">
                    <i class="fas fa-home"></i>
                    <i class="far fa-paper-plane"></i>
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <img src="./image/images.jpg" alt="#"></img>
                    <ul class="profile">
                        <li>프로필</li>
                        <li>저장됨</li>
                        <li>설정</li>
                        <li>계정 전환</li>
                        <li>로그아웃</li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default MainHeader;