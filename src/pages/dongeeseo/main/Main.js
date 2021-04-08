import React, {Component} from 'react';
import './Main.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faCompass, faHeart, faComment, faBookmark, faSmile } from '@fortawesome/free-regular-svg-icons';
import olaf from 'images/donz/olaf.PNG'
import bicycle from 'images/donz/bicycle.jpg'
import cafe from 'images/donz/cafe.jpg'
import cat from 'images/donz/cat.jpg'
import deco from 'images/donz/deco.jpg'
import surfing from 'images/donz/surfing.jpg'
import jeju from 'images/donz/jeju.jpg'
import madeleine from 'images/donz/madeleine.jpg'
import hoian from 'images/donz/hoian.jpg'




class Main extends Component {

    
  render() {
    return(
    <div className = "whole">
        <header className = "mainHeader">
            <nav className = "mainNav">
                <div className = "mainLogo"> Westagram </div>           
                <div className = "searchBar">
                    <FontAwesomeIcon icon= {faSearch} className = "search" />
                    <input className = "searchText" type = "text" placeholder = "Search" />    
                </div>
                <div className = "navIcon">
                    <a href = "#"><FontAwesomeIcon icon = {faHome} className= "home" /></a>
                    <a href = "#"><FontAwesomeIcon icon = {faPaperPlane} className = "airplane" /></a>
                    <a href = "#"><FontAwesomeIcon icon = {faCompass} className = "compass" /></a>
                    <a href = "#"><FontAwesomeIcon icon = {faHeart} className = "heart" /></a>
                    <a href = "#"><img className = "myPhoto" src = {olaf} alt= "no img" /></a>
                </div>
            </nav>
        </header>    
        <main className = "mainMain">
            <section className = "feed">
                <article className = "viewStory">
                    <ul className = "storyUl">
                        <li className = "storyList">
                            <div className = "storyItem">
                                <button className = "storyBtn">
                                    <div className = "storyPhoto">
                                        <img  alt = "no img" className = "storyImg" src = {hoian} />
                                    </div>
                                    <div className = "storyUser">Hoi!an</div>  
                                </button>
                            </div>
                        </li>
                        <li className = "storyList">
                            <div className = "storyItem">
                                <button className = "storyBtn">
                                    <div className = "storyPhoto">
                                        <img alt = "no img" className = "storyImg" src = {bicycle} /> 
                                    </div>
                                    <div className = "storyUser">rider_209</div>  
                                </button>
                            </div>
                        </li>
                        <li className = "storyList">
                            <div className = "storyItem">
                                <button className = "storyBtn">
                                    <div className = "storyPhoto">
                                        <img alt = "no img" className = "storyImg" src = {cafe} />
                                    </div>
                                    <div className = "storyUser">coffee&cake</div>  
                                </button>
                            </div>
                        </li>
                        <li className = "storyList">
                        <div className = "storyItem">
                            <button className = "storyBtn">
                                <div className = "storyPhoto">
                                    <img alt = "no img" className = "storyImg" src = {cat} /> 
                                </div>
                                <div className = "storyUser">imasupercute</div>  
                            </button>
                        </div>
                        </li>
                        <li className = "storyList">
                        <div className = "storyItem">
                            <button className = "storyBtn">
                                <div className = "storyPhoto">
                                    <img alt = "no img" className = "storyImg" src = {deco} /> 
                                </div>
                                <div className = "storyUser">cafe_Palbang</div>  
                            </button>
                        </div>
                        </li>
                        <li className = "storyList">
                        <div className = "storyItem">
                            <button className = "storyBtn">
                                <div className = "storyPhoto">
                                    <img alt = "no img" className = "storyImg" src = {olaf} /> 
                                </div>
                                <div className = "storyUser">doUwanaa</div>  
                            </button>
                        </div>
                        </li>
                        <li className = "storyList">
                            <div className = "storyItem">
                            <button className = "storyBtn">
                                <div className = "storyPhoto">
                                    <img alt = "no img" className = "storyImg" src = {surfing} /> 
                                </div>
                                <div className = "storyUser">hamsik_surf</div>  
                            </button>
                            </div>
                        </li>
                        <li className = "storyList">
                        <div className = "storyItem">
                        <button className = "storyBtn">
                            <div className = "storyPhoto">
                                <img alt = "no img" className = "storyImg" src = {jeju} /> 
                            </div>
                            <div className = "storyUser">donZ_209</div>  
                        </button>
                        </div>
                    </li>
                     </ul>
                </article>
                <article className = "viewUpload">
                    <div className = "uploadUser">
                        <div className = "uploaderFace">
                            <img src = {olaf} alt = "no img" />
                        </div>
                        <div className = "uploaderInfo">
                            <div className = "userName">dongee_029</div>
                            <div className = "userPlace">동이네 집</div>
                        </div>
                        <div className = "moreInfo">
                            <FontAwesomeIcon icon = {faEllipsisH} className = "threeDots" />
                        </div>
                    </div>
                    <div className = "uploadImg">
                        <img src = {madeleine} className= "mainImg" alt= "no img"/>
                    </div>
                    <div className = "viewComment">
                        <div className = "feedbackIcon">
                            <span className = "emptyHeart"><FontAwesomeIcon icon = {faHeart} className = "heart" /></span>
                            <span className = "balloon"><FontAwesomeIcon icon = {faComment} className = "balloonIcon" /></span>
                            <span className = "airPlane"> <FontAwesomeIcon icon = {faPaperPlane} className = "airplane" /></span>
                            <span className = "bookMark"><FontAwesomeIcon icon = {faBookmark} className ="bookmark" /></span>
                        </div>
                        <div className = "likeCount">
                            <span className = "likeNum">52</span>
                            <span className = "likeWord">likes</span>
                        </div>
                        <div className = "uploaderWriting">
                            <div className = "userName">dongee_029</div>
                            <div className = "userSentence">녹차마들렌,,가오나시 졸귀ㅎㅎ 할로윈기념!</div>
                            <div className = "showMoreWriting">
                                <button className = "showMore" type = "button">More</button>
                            </div>
                        </div>
                        <div className = "comments">
                            <ul className = "replies">
                                <div className = "viewAll">View all comments
                                </div>
                                <li className = "reply">
                                    <div className = "userName">sheep&bird</div>
                                    <div className = "userSentence">맛은..?</div>
                                    <div className = "likeHeart">
                                        <FontAwesomeIcon icon = {faHeart} className = "heart" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className = "updateDate">
                        <span className = "number">1</span>
                        <span className = "countDetail">days</span>
                        <span>ago</span>
                    </div>
                    <form className = "addComment">
                        <div className= "smileIcon">
                            <FontAwesomeIcon icon = {faSmile} className = "smile" />
                        </div>
                        <div className = "inputComment">
                            <input className = "addReply" type = "text" placeholder="Add a comment"/>
                        </div>
                        <div className = "post">
                            <button className= "postBtn" type = "button">Post</button>   
                        </div>
                    </form>
                </article>
            </section>
        </main>     
    </div>
    )
  }
}
export default Main
