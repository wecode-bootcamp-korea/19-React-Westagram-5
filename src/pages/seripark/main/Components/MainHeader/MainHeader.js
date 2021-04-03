import React, {Component} from 'react';
import "../MainHeader/MainHeader.scss";

class MainHeader extends Component{
    render(){
        return(
            <header class="main_logo_wrap">
                <div class="anotherwrap">
                    <div class="main_logo">westagram</div>
                    <div class="h_icon_wrap">
                        <i class="fas fa-home"></i>
                        <i class="far fa-paper-plane"></i>
                        <i class="far fa-compass"></i>
                        <i class="far fa-heart"></i>
                        <img src="./image/images.jpg" alt="#"/>
                        <ul class="profile">
                            <li><i class="far fa-user-circle"></i>프로필</li>
                            <li><i class="far fa-bookmark"></i>저장됨</li>
                            <li><i class="fas fa-cog"></i>설정</li>
                            <li><i class="fas fa-sync"></i>계정 전환</li>
                            <li>로그아웃</li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
export default MainHeader;