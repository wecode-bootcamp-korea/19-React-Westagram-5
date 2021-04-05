import React, {Component} from 'react';
import '../MainCon1/MainCon1.scss';
import Dog from "images/seripark/Photo3.png";

class MainCon1 extends Component{
    render(){
        return(
            <div className="contentOne">
                <nav className="navigation">
                    <button className="navBtnLeft"></button>
                    <ul className="navBar">
                        <li className="stories"><img src={Dog} alt="#"/><span>xO.soy</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>toy_roy</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>johnat</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>POsta_p</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>serio_y</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>voex</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>xOoye5</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>serino</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>parmat0</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>serino</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>parmat0</span></li>
                    </ul>
                    <button className="navBtnRight"></button>
                </nav>
                <article className="scrollContents">
                <div className="posting">
                        <div className="topPost">
                            <div className="userImg">
                                <img src={Dog} alt="#"/>
                                <p>user_name</p>
                            </div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="midPost"><img src={Dog} alt="#"/></div>
                        <div className="subPost">
                            <div className="subPost1">
                                <div className="emojis">
                                    <i className="far fa-heart"></i>
                                    <i className="far fa-comment"></i>
                                    <i className="far fa-paper-plane"></i>
                                    <div className="numLike">좋아요 10892개</div>
                                </div>
                                <i className="far fa-bookmark"></i>
                            </div>
                            <div className="subPost2">
                                <p className="commentAdd"></p>
                            </div>
                            <div className="subPost3">
                                <input type="text"/>
                                <button type="submit" form="form" value="Submit">게시</button>
                            </div>
                        </div>
                    </div>
                    <div className="posting">
                        <div className="topPost">
                            <div className="userImg">
                                <img src={Dog} alt="#"/>
                                <p>user_name</p>
                            </div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="midPost"><img src={Dog} alt="#"/></div>
                        <div className="subPost">
                            <div className="subPost1">
                                <div className="emojis">
                                    <i className="far fa-heart"></i>
                                    <i className="far fa-comment"></i>
                                    <i className="far fa-paper-plane"></i>
                                    <div className="numLike">좋아요 10892개</div>
                                </div>
                                <i className="far fa-bookmark"></i>
                            </div>
                            <div className="subPost2">
                                <p className="commentAdd"></p>
                            </div>
                            <div className="subPost3">
                                <input type="text"/>
                                <button type="submit" form="form" value="Submit">게시</button>
                            </div>
                        </div>
                    </div>
                    <div className="posting">
                        <div className="topPost">
                            <div className="userImg">
                                <img src={Dog} alt="#"/>
                                <p>user_name</p>
                            </div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="midPost"><img src={Dog} alt="#"/></div>
                        <div className="subPost">
                            <div className="subPost1">
                                <div className="emojis">
                                    <i className="far fa-heart"></i>
                                    <i className="far fa-comment"></i>
                                    <i className="far fa-paper-plane"></i>
                                    <div className="numLike">좋아요 10892개</div>
                                </div>
                                <i className="far fa-bookmark"></i>
                            </div>
                            <div className="subPost2">
                                <p className="commentAdd"></p>
                            </div>
                            <div className="subPost3">
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