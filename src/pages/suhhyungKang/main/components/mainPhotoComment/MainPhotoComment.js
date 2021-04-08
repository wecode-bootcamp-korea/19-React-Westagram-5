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
  constructor() {
    super();

    this.state = {
      comment: "",
      commentLists: [],
      changeColor: false
    };
  }
  changeColor=()=>{
    this.setState({
      changeColor:!this.state.changeColor
    })  }

  handleInput = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };




  addInput = () => {
    let commentArray = this.state.commentLists;
    commentArray.push(this.state.comment);

    this.setState({
      commentLists: commentArray,
      comment: "",
    });
  };
  
  render() {
    return (
      <>
        <div className="mainPhotoComment">
          <div className="mainPhotoIcon">
            <div>
              <FontAwesomeIcon icon={faHeart} className={ (this.state.changeColor) ? "faHeart" : "colorRed" } onClick={this.changeColor}/>
              <FontAwesomeIcon icon={faComment} className="faComment" />
              <FontAwesomeIcon icon={faPaperPlane} className="faPaperPlane" />
            </div>
            <FontAwesomeIcon icon={faBookmark} className="faBookmark" />
          </div>
          <div className="likeComment">
            <div className="like">좋아요 7689개</div>
            <div className="likeName">
              <div className="hiOt">
                <a
                  className="likeName1"
                  href="https://www.instagram.com/syeong_ii/"
                >
                  uniform
                </a>
                <div class="Hello"> OT야 안녕</div>
              </div>
              <div className="Comments">
                <div className="NameComments">
                  <a
                    className="likeName1"
                    href="https://www.instagram.com/yuna_atoz/"
                  >
                    yuna_atoz
                  </a>

                  <div class="library">도서관이구만~</div>
                </div>
                <div class="place">
                  <div className="heartBox">
                    <FontAwesomeIcon icon={faHeart} className="faHeart" />
                  </div>
                  <button class="libraryBt">삭제</button>
                </div>
              </div>

              {this.state.commentLists.map((ele) => {
                return (
                  <div class="likeHeartBox">
                    <div class="syeongiiId">
                      <div class="commentId">syeongii</div>
                      <div class="newComment">{ele}</div>
                    </div>
                    <div class="heartDelete">
                      <div className="heartBoxBT">
                        <FontAwesomeIcon icon={faHeart} className="faHeart" />
                      </div>
                      <button class="delete">삭제</button>
                    </div>
                  </div>
                );
              })}
              <div className="date">
                <div className="dateDay">1일 전</div>
              </div>
              <div className="emoticon">
                <FontAwesomeIcon icon={faSmile} className="faSmile" />

                <input
                  className="commentBox"
                  type="text"
                  placeholeder="댓글 달기..."
                  onChange={this.handleInput}
                  value={this.state.comment}
                  onKeyPress={this.addInput}
                  />
                <div class="buttonUpload">
                  <button className="upload" onClick={this.addInput} >
                    게시
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPhotoComment;
