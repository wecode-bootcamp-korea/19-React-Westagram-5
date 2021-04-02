import React, {Component} from 'react';

class MainCon2 extends Component{
    render(){
      return(

        <article class="content_two">
            
            <div class="user_info">
                {/* <img src="./image/download2.jpg" alt="#"> */}
                <p>morimori_32<br/>golf player</p>
            </div>
            <p class="recommended_users_info">
                <span>회원님을 위한 추천</span>
                <span>모두보기</span>
            </p>
            <div class="wrap_for_recommend">
                <ul class="recommended">
                    <li class="recommended_users">
                        <div class="r_u_inner_wrap">
                            {/* <img src="./image/download3.jpg" alt="#"> */}
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                    <li class="recommended_users">
                        {/* <img src="./image/download3.jpg" alt="#"> */}
                        <div class="r_u_inner_wrap">
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                    <li class="recommended_users">
                        {/* <img src="./image/download3.jpg" alt="#"> */}
                        <div class="r_u_inner_wrap">
                            <span>uvvin</span>
                            <span>회원님을 위한 추천</span>
                        </div>
                        <button type="submit" form="form" value="Submit">팔로우</button>
                    </li>
                    <li class="recommended_users">
                        {/* <img src="./image/download3.jpg" alt="#"> */}
                        <div class="r_u_inner_wrap">
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