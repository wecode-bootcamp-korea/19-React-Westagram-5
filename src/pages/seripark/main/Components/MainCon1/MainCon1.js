import React, {Component} from 'react';

class MainCon1 extends Component{
    render(){
        return(
            <div class="content_one">
                <nav>
                    <button class="nav_btn_left"></button>
                    <ul class="nav_bar">
                        {/* <li class="stories"><img src="./image/download.jpg"><span>xOxO.soy</span></li>
                        <li class="stories"><img src="./image/download2.jpg"><span>toy_roy</span></li>
                        <li class="stories"><img src="./image/download3.jpg"><span>johnat</span></li>
                        <li class="stories"><img src="./image/images.jpg"><span>POsta_p</span></li>
                        <li class="stories"><img src="./image/images0.jpg"><span>serio_y</span></li>
                        <li class="stories"><img src="./image/Photo.png"><span>voex</span></li>
                        <li class="stories"><img src="./image/Photo2.png"><span>xOoye5</span></li>
                        <li class="stories"><img src="./image/Photo3.png"><span>serino</span></li>
                        <li class="stories"><img src="./image/download.jpg"><span>parmat0</span></li>
                        <li class="stories"><img src="./image/download2.jpg"><span>xOxO.soy</span></li>
                        <li class="stories"><img src="./image/download3.jpg"><span>xOxO.soy</span></li> */}
                    </ul>
                    <button class="nav_btn_right"></button>
                </nav>
                <article class="scroll_content">
                    <div class="posting">
                        <div class="top_post">
                            <div class="user_img">
                                <img src="image/images0.jpg" alt="#"/>
                                <p>user_name</p>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        {/* <div class="mid_post"><img src="./image/Photo.png"/></div> */}
                        <div class="sub_post">
                            <div class="sub_post_1">
                                <div class="emojis">
                                    <i class="far fa-heart"></i>
                                    <i class="far fa-comment"></i>
                                    <i class="far fa-paper-plane"></i>
                                    <div class="num_like">좋아요 10892개</div>
                                </div>
                                <i class="far fa-bookmark"></i>
                            </div>
                            <div class="sub_post_2">
                                <p class="post_comment">uvvin 카페에서 즐기는 여유가 제일 좋다. 바닐라 커피향을 맡으며 책을 읽으며 마무리하는 하루</p>
                                <p class="comments">sehevly 사진 너무예뻐요</p>
                                <p class="comments">durong 나도 여행 가고싶다</p>
                                <p class="comments">tata_kim 아이슬란드ㅜㅜ</p>
                            </div>
                            <div class="sub_post_3">
                                <input type="text"/>
                                <button type="submit" form="form" value="Submit">게시</button>
                            </div>
                        </div>
                    </div>
                    <div class="posting">
                        <div class="top_post">
                            <div class="user_img">
                                {/* <img src="image/images0.jpg" width="10px"height="10px"/> */}
                                <p>user_name</p>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        {/* <div class="mid_post"><img src="./image/Photo.png"/></div> */}
                        <div class="sub_post">
                            <div class="sub_post_1">
                                <div class="emojis">
                                    <i class="far fa-heart"></i>
                                    <i class="far fa-comment"></i>
                                    <i class="far fa-paper-plane"></i>
                                    <div class="num_like">좋아요 10892개</div>
                                </div>
                                <i class="far fa-bookmark"></i>
                            </div>
                            <div class="sub_post_2">
                                <p class="post_comment">uvvin 카페에서 즐기는 여유가 제일 좋다. 바닐라 커피향을 맡으며 책을 읽으며 마무리하는 하루</p>
                                <p class="comments">sehevly 사진 너무예뻐요</p>
                                <p class="comments">durong 나도 여행 가고싶다</p>
                                <p class="comments">tata_kim 아이슬란드ㅜㅜ</p>
                            </div>
                            <div class="sub_post_3">
                                <input type="text"/>
                                <button type="submit" form="form" value="Submit">게시</button>
                            </div>
                        </div>
                    </div>
                    <div class="posting">
                        <div class="top_post">
                            <div class="user_img">
                                {/* <img src="image/images0.jpg" width="10px"height="10px"/> */}
                                <p>user_name</p>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        {/* <div class="mid_post"><img src="./image/Photo.png"/></div> */}
                        <div class="sub_post">
                            <div class="sub_post_1">
                                <div class="emojis">
                                    <i class="far fa-heart"></i>
                                    <i class="far fa-comment"></i>
                                    <i class="far fa-paper-plane"></i>
                                    <div class="num_like">좋아요 10892개</div>
                                </div>
                                <i class="far fa-bookmark"></i>
                            </div>
                            <div class="sub_post_2">
                                <p class="post_comment">uvvin 카페에서 즐기는 여유가 제일 좋다. 바닐라 커피향을 맡으며 책을 읽으며 마무리하는 하루</p>
                                <p class="comments">sehevly 사진 너무예뻐요</p>
                                <p class="comments">durong 나도 여행 가고싶다</p>
                                <p class="comments">tata_kim 아이슬란드ㅜㅜ</p>
                            </div>
                            <div class="sub_post_3">
                                <input type="text"/>
                                <button type="submit" form="form" value="Submit">게시</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
export default MainCon1;