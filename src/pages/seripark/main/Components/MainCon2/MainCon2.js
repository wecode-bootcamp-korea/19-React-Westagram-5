import React, {Component} from 'react';
import '../MainCon2/MainCon2.scss';
import Catdog from "images/seripark/images0.jpg";
import Cartoon from "images/seripark/images.jpg";

class MainCon2 extends Component{
    render(){
      return(

        <article className="contentTwo">
            
            <div className="userInfo">
                 <img src={Catdog} alt="#"/> 
                 <div class="spanWrap">
                     <span>morimori32</span>
                     <span>golf player</span>
                 </div>
            </div>
            <p className="recommendedUsersInfo">
                <span>회원님을 위한 추천</span>
                <span>모두보기</span>
            </p>
            <div className="wrapForRecommend">
                <ul className="recommended">
                    <li className="recommendedUsers">
                        <img src={Cartoon} alt="#"/> 
                        <div className="ruInnerWrap">
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                    <li className="recommendedUsers">
                        <img src={Cartoon} alt="#"/> 
                        <div className="ruInnerWrap">
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                    <li className="recommendedUsers">
                        <img src={Cartoon} alt="#"/> 
                        <div className="ruInnerWrap">
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                    <li className="recommendedUsers">
                        <img src={Cartoon} alt="#"/> 
                        <div className="ruInnerWrap">
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                </ul>
            </div>
             
            <footer>
                <span>
                소개-도움말-홍보센터-채용정보-개인정보처리방침-약관-위치-인기계정-해시태그-언어
                </span>
            </footer>
            
        </article>

    
      )
    }
  }
export default MainCon2;