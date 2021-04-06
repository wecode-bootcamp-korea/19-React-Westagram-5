import React, {Component} from 'react';
import '../MainCon1/MainCon1.scss';
import Dog from "images/seripark/Photo2.png";
import What from "images/seripark/download3.jpg";
import Ever from "images/seripark/download2.jpg";
import Wish from "images/seripark/download.jpg";
import Come from "images/seripark/Photo3.png";
import True from "images/seripark/Photo.png";

class MainCon1 extends Component{
    inputChange1 = () => {

        const commentInput = document.querySelector('.commentInput');
        const commentBtn = document.querySelector('.commentBtn');
        const inputLength = commentInput.value.length;
        // for (var i=0; i<commentInput.length; i++) {
        //         commentBtn[i].setAttribute('style', 'background-color:#333;');
        //     }
        if(inputLength === 0){
            commentBtn.style.backgroundColor = "transparent";
        }
        if(inputLength>0){
            commentBtn.style.backgroundColor ="red";
        }
    }
    // inputChange2 = () => {
    //     // var container = document.querySelector("#test");
    //     // var matches = container.querySelectorAll("div.highlighted > p");
    //     const commentInput = document.querySelector('commentInput');
    //     const commentBtn = document.querySelector('.commentBtn');
        
    //     const inputLength = commentInput.value.length;
    //     // for (var i=0; i<commentInput.length; i++) {
    //     //         commentBtn[i].setAttribute('style', 'background-color:#333;');
    //     //     }
    //     if(inputLength === 0){
    //         commentBtn.style.backgroundColor = "transparent";
    //     }
    //     if(inputLength>0){
    //         commentBtn.style.backgroundColor ="red";
    //     }
    // }
    // inputChange3 = () => {
    //     // var container = document.querySelector("#test");
    //     // var matches = container.querySelectorAll("div.highlighted > p");
    //     const commentInput = document.getElementsByTagName('input');
    //     const commentBtn = document.getElementsByTagName('button');
        
    //     // const inputLength = commentInput.value.length;
    //     for (var i=0; i<commentInput.length; i++) {
    //             commentBtn[i].setAttribute('style', 'background-color:#333;');
    //         }
    //     // if(inputLength === 0){
    //     //     commentBtn.style.backgroundColor = "transparent";
    //     // }
    //     // if(inputLength>0){
    //     //     commentBtn.style.backgroundColor ="red";
    //     // }
    // }
    // writingComments = () => {
    //     const inpKey = document.getElementByClass(".commentInput");
    //     const btnInsert = document.getElementByClass(".commentBtn");
    //     const isOutput = document.getElementByClass(".commentAdd");

    //     btnInsert.onclick=function(){
    //         const key= inpKey.value;
           
    //         if (key){
    //             localStorage.setItem(key);
    //             location.reload();//refresh 시키는것 
    //         }
    //     }
    //     for (let i=0; i <localStorage.length; i++){
    //         const key= localStorage.key(i);
    //         // const value=localStorage.getItem(key);
    //         isOutput.innerHTML += `${key}<br/>`;
    //     }
    // }

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
                                <input type="text" className="commentInput" onChange={this.inputChange1}/>
                                <button type="submit" className="commentBtn" value="Submit" onChange={this.inputChange1}>게시</button>
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
                                <input type="text" className="commentInput" onChange={this.inputChange2}/>
                                <button type="submit" className="commentBtn" value="Submit" onChange={this.inputChange2}>게시</button>
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
                                <input type="text" className="commentInput" onChange={this.inputChange3}/>
                                <button type="submit" className="commentBtn" value="Submit" onChange={this.inputChange3}>게시</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
export default MainCon1;