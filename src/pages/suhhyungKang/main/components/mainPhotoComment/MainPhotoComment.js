import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";

import "./MainPhotoComment.scss";

class MainPhotoComment extends Component {

  constructor(){
    super();

    this.state = {
      commment: '',
      commentLists:[]
    }

  }

  handleInput = e =>{
    this.setState({
      commment : e.target.value
    })
  }

  addInput = () => {
    let commentArray = this.state.commentLists;
    commentArray.push(this.state.comment);

    this.setState({
      commentLists:commentArray,
      comment: ''
    })
  }

  render() {
    return (
      <>
        <div className="mainPhotoComment">
          <div className="mainPhotoIcon">
            <FontAwesomeIcon icon={faHeart} className="faHeart" />
            <FontAwesomeIcon icon={faComment} className="faComment" />
            <FontAwesomeIcon icon={faPaperPlane} className="faPaperPlane" />
            <FontAwesomeIcon icon={faBookmark} className="faBookmark" />
          </div>
          <div className="likeComment">
            <div className="like">좋아요 7689개</div>
            <div className="likeName">
              <a
                className="likeName1"
                href="https://www.instagram.com/syeong_ii/"
              >
                uniform
              </a>
              <span> &nbsp; OT야 안녕</span>
              <div className="Comments">
                <a
                  className="likeName1"
                  href="https://www.instagram.com/yuna_atoz/"
                >
                  yuna_atoz
                </a>
                <span>&nbsp;&nbsp;도서관이구만~</span>
                <span className="heart" />
                <FontAwesomeIcon icon={faHeart} className="faHeart" />
              </div>
              <div className="date">
                <div className="dateDay">1일 전</div>
              </div>
              <div className="emoticon">
                <FontAwesomeIcon icon={faSmile} className="faSmile" />
                <input
                  className="commentBox" type="text"placeholeder="댓글 달기..." onChange={this.handleInput} value={this.state.comment}/>
                <button className="upload" onClick={this.addInput}>게시</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPhotoComment;
