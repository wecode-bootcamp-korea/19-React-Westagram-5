import React, {Component} from 'react';
import '../MainCon1/MainCon1.scss';
import Dog from "images/seripark/Photo2.png";
import What from "images/seripark/download3.jpg";
import Ever from "images/seripark/download2.jpg";
import Wish from "images/seripark/download.jpg";
import Come from "images/seripark/Photo3.png";
import True from "images/seripark/Photo.png";

class MainCon1 extends Component{

    constructor(){
        super();

        this.state = {
            comment: '',
            commentLists: [],
            color:" ",
            changeEmoji:false
        }
    }
    changingEmoji= ()=> {
        this.setState({
            changeEmoji:!this.state.changeEmoji
        })
    }
    handleInput = e => {
        this.setState({
            comment : e.target.value
        })
    }

    addInput = () => {
        let commentArray = this.state.commentLists;
        commentArray.push(this.state.comment);

        this.setState({
            commentLists: commentArray,
            comment: '',
            color:''
        })
    }
    inputColorChange = (e) => {
        //자바스크립트 코드

        // const commentInput = document.querySelector('.commentInput');
        // const commentBtn = document.querySelector('.commentBtn');
        // const inputLength = commentInput.value.length;
       
        // if(inputLength === 0){
        //     commentBtn.style.backgroundColor = "transparent";
        // }
        // if(inputLength>0){
        //     commentBtn.style.backgroundColor ="#c0c0c0";
        // }
       
        this.setState({
           color:'grey'
        })
       
    }

    render(){
        return(
            <div className="contentOne">
                <nav className="navigation">
                    <button className="navBtnLeft"></button>
                    <ul className="navBar">
                        <li className="stories"><img src={Dog} alt="#"/><span>xO.soy</span></li>
                        <li className="stories"><img src={What} alt="#"/><span>toy_roy</span></li>
                        <li className="stories"><img src={Dog} alt="#"/><span>johnat</span></li>
                        <li className="stories"><img src={Ever} alt="#"/><span>POsta_p</span></li>
                        <li className="stories"><img src={True} alt="#"/><span>xOoye5</span></li>
                        <li className="stories"><img src={Wish} alt="#"/><span>serio_y</span></li>
                        <li className="stories"><img src={Come} alt="#"/><span>voex</span></li>
                        <li className="stories"><img src={True} alt="#"/><span>xOoye5</span></li>
                        <li className="stories"><img src={What} alt="#"/><span>toy_roy</span></li>
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
                                    {/* {this.state.changeEmoji ? <i className="far fa-heart"></i> : <i className="fas fa-heartbeat"></i>} */}
                                    <i className="fas fa-heartbeat"></i>
                                    <i className="far fa-comment"></i>
                                    <i className="far fa-paper-plane"></i>
                                    <div className="numLike">좋아요 10892개</div>
                                </div>
                                <i className="far fa-bookmark"></i>
                            </div>
                            <div className="subPost2">
                            {this.state.commentLists.map(ele => {
                                    return(
                                <div class="tidy">
                                    <div>{ele}</div>
                                    <div>&#10084;</div>
                                </div>
                                )
                            })}
                            </div>
                            <div className="subPost3">
                                <input type="text" className="commentInput"  onChange={this.handleInput} onKeyPress={this.inputColorChange}/>
                                <button type="submit" className="commentBtn" value="Submit" onClick={this.addInput} style={{backgroundColor:this.state.color}}>게시</button>
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
                            {this.state.commentLists.map(ele => {
                                    return(
                                    <div class="tidy">
                                        <div>{ele}</div>
                                        <div>&#10084;</div>
                                    </div>
                                )
                            })}
                            </div>
                            <div className="subPost3">
                                <input type="text" className="commentInput" onChange={this.handleInput}  onKeyPress={this.inputColorChange}/>
                                <button type="submit" className="commentBtn" value="Submit" onClick={this.addInput} style={{backgroundColor:this.state.color}}>게시</button>
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
                            {this.state.commentLists.map(ele => {
                                    return(
                                    <div class="tidy">
                                        <div>{ele}</div>
                                        <div>&#10084;</div>
                                    </div>
                                )
                            })}
                            </div>
                            <div className="subPost3">
                                <input type="text" className="commentInput" onChange={this.handleInput}  onKeyPress={this.inputColorChange}/>
                                <button type="submit" className="commentBtn" value="Submit" onClick={this.addInput} style={{backgroundColor:this.state.color}}>게시</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
export default MainCon1;