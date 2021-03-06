import React, {Component} from 'react';
import './Main.scss'

class Main extends Component {
  render() {
    return(
      <>
        <header>
            <nav>
                <div className = "mainLogo"> Westagram </div>           
                <div className = "searchBar">
                    <i className="fas fa-search"></i>
                    <input className = "searchText" type = "text" placeholder = "Search"/>    
                </div>
                <div className = "navIcon">
                    <a href = "https://reactjs.org"><i className="far fa-paper-plane"></i></a>
                    <a href = "https://reactjs.org"><i className="far fa-compass"></i></a>
                    <a href = "https://reactjs.org"><i className="far fa-heart"></i></a>
                    <a href = "https://reactjs.org"><img className = "myPhoto" src = "img/olaf.PNG" alt = "no img"/></a>
                </div>
            </nav>
        </header>    
              <main>
                  <section className = "feed">
                      <div className = "feedBox">
                          <div className = "storyBox">
                              <ul className = "storyUl">
                                  <li className = "storyList">
                                    <div className = "storyBig">
                                      <button className = "storyBtn">
                                          <div className = "storySmall">
                                            <canvas className = "storyCanvas"></canvas>
                                              <span className ="storyBoxCircle">
                                                <img  alt = "no img" className = "storyImg" src = "img/hoian.jpg" />
                                              </span>
                                          </div>
                                          <div className = "storyUser">Hoi!an</div>  
                                      </button>
                                    </div>
                                  </li>
                                  <li className = "storyList">
                                    <div className = "storyBig">
                                      <button className = "storyBtn">
                                          <div className = "storySmall">
                                            <canvas className = "storyCanvas"></canvas>
                                            <span className ="storyBoxCircle">
                                              <img alt = "no img" className = "storyImg" src = "img/bicycle.jpg"/> 
                                            </span>
                                          </div>
                                          <div className = "storyUser">rider_209</div>  
                                      </button>
                                    </div>
                                  </li>
                                  <li className = "storyList">
                                    <div className = "storyBig">
                                      <button className = "storyBtn">
                                          <div className = "storySmall">
                                            <canvas className = "storyCanvas"></canvas>
                                            <span className ="storyBoxCircle">
                                                <img alt = "no img" className = "storyImg" src = "img/cafe.jpg" />
                                            </span>
                                          </div>
                                          <div className = "storyUser">coffeeNcake</div>  
                                      </button>
                                    </div>
                                  </li>
                                  <li className = "storyList">
                                    <div className = "storyBig">
                                      <button className = "storyBtn">
                                          <div className = "storySmall">
                                            <canvas className = "storyCanvas"> </canvas>
                                            <span className ="storyBoxCircle">
                                                <img alt = "no img" className = "storyImg" src = "img/cat.jpg" /> 
                                            </span>
                                          </div>
                                          <div className = "storyUser">imasupercute</div>  
                                      </button>
                                    </div>
                                  </li>
                                  <li className = "storyList">
                                    <div className = "storyBig">
                                      <button className = "storyBtn">
                                          <div className = "storySmall">
                                            <canvas className = "storyCanvas"></canvas>
                                            <span className ="storyBoxCircle">
                                                <img alt = "no img" className = "storyImg" src = "img/deco.jpg" /> 
                                            </span>
                                          </div>
                                          <div className = "storyUser">cafe_Palbang</div>  
                                      </button>
                                    </div>
                                  </li>
                                  <li className = "storyList">
                                    <div className = "storyBig">
                                      <button className = "storyBtn">
                                          <div className = "storySmall">
                                            <canvas className = "storyCanvas"></canvas>
                                            <span className ="storyBoxCircle">
                                                <img alt = "no img" className = "storyImg" src = "img/olaf.PNG" /> 
                                            </span>
                                          </div>
                                          <div className = "storyUser">doUwanaa</div>  
                                      </button>
                                    </div>
                                  </li>
                                  <li className = "storyList">
                                      <div className = "storyBig">
                                        <button className = "storyBtn">
                                            <div className = "storySmall">
                                              <canvas className = "storyCanvas">  
                                              </canvas>
                                            <span className ="storyBoxCircle">
                                                <img alt = "no img" className = "storyImg" src = "img/surfing.jpg" /> 
                                            </span>
                                          </div>
                                          <div className = "storyUser">hamsik_surf</div>  
                                        </button>
                                      </div>
                                    </li>
                                    <li className = "storyList">
                                      <div className = "storyBig">
                                        <button className = "storyBtn">
                                            <div className = "storySmall">
                                              <canvas className = "bigCanvas">  
                                              </canvas>
                                            <span className ="storyBoxCircle">
                                                <img alt = "no img" className = "storyImg" src = "img/violet.jpg" /> 
                                            </span>
                                          </div>
                                          <div className = "storyUser">donZ_209</div>  
                                        </button>
                                      </div>
                                    </li>
                              </ul>
                          </div>
                          <div className = "viewBox">
                            <div className = "writer"> 
                              <div className = "userInfo">
                                <button className = "goMypage">
                                  <div className = "storySmall">
                                      <canvas className = "smallCanvas">
                                      </canvas>
                                      <span className = "smallImg">
                                          <img className = "smallImg" src = "img/olaf.PNG" alt = "no img" />
                                      </span>
                                  </div>
                                </button>
                                <div className = "userName">
                                    <div className = "linkName">
                                      <span>
                                        <a href = "https://www.instagram.com/dongee_209/" alt = "does not exist">dongee_209</a>
                                      </span>
                                    </div>
                                    <div className = "linkMap">
                                        <a href = "https://reactjs.org">????????????</a>
                                    </div>
                                </div>
                                <div className = "moreInfo">
                                  <i className="fas fa-ellipsis-h"></i>
                                </div>  
                              </div> 
                            </div>                        
                            <div className = "mainImg">
                              <div className = "bigImg">
                                  <img src = "img/madeleine.jpg" alt= "no img" />
                              </div>                            
                              <button className = "tagBtn">
                                  <div className = "tagIcon">
                                    <i className="fas fa-user-circle"></i>
                                  </div>
                              </button>
                            </div>                     
                            <div className = "talkBox">
                                <div className = "talkIcon">
                                  <span className = "heartIcon">
                                    <button className = "heartIcon_">
                                      <i className="far fa-heart"></i>
                                    </button>
                                  </span>
                                  <span className = "allCommentIcon">
                                    <button className = "allCommentIcon_">
                                      <i className="far fa-comment"></i>
                                    </button>
                                  </span>
                                  <span className = "dmIcon">
                                    <button className = "dmIcon_">
                                      <i className="far fa-paper-plane"></i>
                                    </button>
                                  </span>
                                  <span className = "bookmarkIcon">
                                    <button className = "bookmarkIcon_">
                                      <i className="far fa-bookmark"></i>
                                    </button>
                                  </span>
                                </div>
                                <div className = "likeBox">
                                    <a href ="https://reactjs.org">
                                      <span> 42</span>
                                      likes
                                    </a>
                                </div>
                                <div className = "talkUsers">
                                  <div className = "mainTalker">
                                      <span className = "linkUser">
                                        <a href = "https://www.instagram.com/dongee_209/" alt = "does not exist">dongee_209</a>
                                      </span>
                                      <span className = "userWrite">
                                      ????????? ?????? ???????????? ?????????. ?????? ????????? ??????????????? ???????????????. ???????????????
                                      </span>
                                      <span className = "moreText">
                                        <a href = "https://reactjs.org" alt = "does not exist">more</a>
                                      </span>
                                  </div>
                                  <div className = "comment">
                                      <div className = "viewAllComment">
                                        <a href= "https://reactjs.org">View all 2 comments </a>
                                      </div>
                                      <div className = "commenter">
                                        <span className = "linkUser">
                                          <a href = "https://www.instagram.com/dongee_209/" alt = "does not exist">sheep_citizen</a>
                                        </span>
                                        <span className = "linkFriend">
                                          <a href = "https://www.instagram.com/dongee_209/" alt = "does not exist">@dongee_209</a>
                                        </span>
                                        <span className = "userWrite">
                                        ??????...?
                                        </span>
                                        <span className = "heartIcon">
                                          <button className = "heartIcon_">
                                            <i className="far fa-heart"></i>
                                          </button>
                                        </span>
                                      </div>
                                      <div className = "commenter">
                                        <span className = "linkUser">
                                          <a href = "https://www.instagram.com/dongee_209/" alt = "does not exist">crystal_in</a>
                                        </span>
                                        <span className = "linkFriend">
                                          <a href = "https://www.instagram.com/dongee_209/" alt = "does not exist"> mun_sh</a>
                                        </span>
                                        <span className = "userWrite">
                                        ?????? ?????????!
                                        </span>
                                        <span className = "heartIcon">
                                          <button className = "heartIcon_">
                                            <i className="far fa-heart"></i>
                                          </button>
                                        </span>
                                      </div>
                                  </div>
                                </div>                
                                <div className = "talkDateBox">
                                  <p>
                                    <time datetime = "1D"> 1 days </time>
                                    ago
                                    </p>
                                </div>
                                <div className = "addComment">
                                  <span className = "smileIcon">
                                    <button className = "smileIcon_">
                                      <i className="far fa-smile"></i>
                                    </button>
                                  </span>
                                  <div className = "addTextBox">
                                      <input placeholder = "Add a comment..." />
                                  </div>
                                  <div className = "addTextBtn">
                                    <button>Post</button>             
                                  </div>
                                </div>
                            </div> 
                          </div>
                    </div>                
                  </section>   
              </main>
      </>  
    )
  }
}
export default Main
