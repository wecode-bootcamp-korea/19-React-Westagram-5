import React, { Component } from 'react';
import mainData from'./mainData';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faCompass, faHeart, faComment, faBookmark, faSmile } from '@fortawesome/free-regular-svg-icons';
import olaf from 'images/donz/olaf.PNG';
import cafe from 'images/donz/cafe.jpg';

class Main extends Component {
constructor(){
    super();
    this.state = {
        id: 0,
        comment: '',
        comments: []
    };
}

    handleRemove = () => {
        const { comments } = this.state;

        this.setState({
        comments : comments.filter(item => {
        })}
        );
    }

    writeComment = e => {
        this.setState ({
            comment: e.target.value,
        })
    }

    addReply = () => {
        const {id, comment, comments} = this.state;
        
        this.setState({
           comments: comments.concat({
             comment: comment,
             id: id + 1
            }),
            comment: '',
            
        });
    }


    handleKeyPress = e =>{
        if(e.key === "Enter"){
            if(!this.state.comment){
                e.preventDefault();
            } else {
                return this.addReply();
            }
        }
    };



    render() {
        return (   
            <div className="whole">
                <header className="mainHeader">
                    <nav className="mainNav">
                        <div className="mainLogo"> Westagram </div>
                        <div className="searchBar">
                            <FontAwesomeIcon icon={faSearch} className="search" />
                            <input className="searchText" type="text" placeholder="Search" />
                        </div>
                        <div className="navIcon">
                            <a href="/"><FontAwesomeIcon icon={faHome} className="home" /></a>
                            <a href="/"><FontAwesomeIcon icon={faPaperPlane} className="airplane" /></a>
                            <a href="/"><FontAwesomeIcon icon={faCompass} className="compass" /></a>
                            <a href="/"><FontAwesomeIcon icon={faHeart} className="heart" /></a>
                            <a href="/"><img className="myPhoto" src={olaf} alt="no img" /></a>
                        </div>
                    </nav>
                </header>
                <main className="mainMain">
                    <section className="feed">
                        <article className="viewStory">
                            <ul className="storyUl">
                                {mainData.map((data, index) =>{
                                    return (
                                        <li key={index} className="storyList">
                                            <div className="storyItem">
                                                <button className="storyBtn">
                                                    <div className="storyPhoto">
                                                        <img alt="no img" className="storyImg" src={data.img} />
                                                    </div>
                                                    <div className="storyUser">{data.user}</div>
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                        <article className="viewUpload">
                            <div className="uploadUser">
                                <div className="uploaderFace">
                                    <img src={olaf} alt="no img" />
                                </div>
                                <div className="uploaderInfo">
                                    <div className="userName">dongee_029</div>
                                    <div className="userPlace">동이네 집</div>
                                </div>
                                <div className="moreInfo">
                                    <FontAwesomeIcon icon={faEllipsisH} className="threeDots" />
                                </div>
                            </div>
                            <div className="uploadImg">
                                <img src={cafe} className="mainImg" alt="no img" />
                            </div>
                            <div className="viewComment">
                                <div className="feedbackIcon">
                                    <span className="emptyHeart"><FontAwesomeIcon icon={faHeart} className="heart" /></span>
                                    <span className="balloon"><FontAwesomeIcon icon={faComment} className="balloonIcon" /></span>
                                    <span className="airPlane"> <FontAwesomeIcon icon={faPaperPlane} className="airplane" /></span>
                                    <span className="bookMark"><FontAwesomeIcon icon={faBookmark} className="bookmark" /></span>
                                </div>
                                <div className="likeCount">
                                    <span className="likeNum">52</span>
                                    <span className="likeWord">likes</span>
                                </div>
                                <div className="uploaderWriting">
                                    <div className="userName">dongee_029</div>
                                    <div className="userSentence">치즈케이크 존맛탱~~~~~~~~~</div>
                                    <div className="showMoreWriting">
                                        <button className="showMore" type="button">More</button>
                                    </div>
                                </div>
                                <div className="comments">
                                    <ul className="replies">
                                        <div className="viewAll">View all comments </div>
                                        <li className="reply">
                                            <div className="userName">sheep&bird</div>
                                            <div className="userSentence">지승이랑 간겨?</div>
                                            <div className="likeHeart">
                                                <FontAwesomeIcon icon={faHeart} className="heart" />
                                                <FontAwesomeIcon icon={faTimes} className="time" />
                                            </div>
                                        </li>
                                        {this.state.comments.map((text)=>{
                                            return(
                                                <li className="reply" key={text.num}>
                                                    <div className="userName"> 동동</div>
                                                    <div className="userSentence">{text.comment}</div>
                                                    <div className="likeHeart">
                                                        <FontAwesomeIcon icon={faHeart} className="heart" />
                                                        <button className= 'removeBtn' onClick= {this.handleRemove}>
                                                        <FontAwesomeIcon icon={faTimes} className="time" />
                                                        </button>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="updateDate">
                                <span className="number">1</span>
                                <span className="countDetail">days</span>
                                <span>ago</span>
                            </div>
                            <div className="addComment">
                                <div className="smileIcon">
                                    <FontAwesomeIcon icon={faSmile} className="smile" />
                                </div>
                                <div className="inputComment">
                                    <input className="addReply" type="text" placeholder="Add a comment" onChange={this.writeComment} onKeyPress={this.handleKeyPress} value={this.state.comment}/>
                                </div>
                                <div className="post">
                                    <button className="postBtn" type="button" onClick={ this.addReply } >Post</button>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Main
