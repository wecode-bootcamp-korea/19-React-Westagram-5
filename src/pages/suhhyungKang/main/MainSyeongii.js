import React, { component } from "react";
import MainHeader from MainHeader;


class MainSyeongii extends Component {
  render() {
    return (
      <>
        <MainHeader/>
        <section>
          <nav>
            <div className="followers">
              <ul className="listPeople">
                <li>
                  <div className="people">
                    <div className="myPhoto">
                      <img
                        className="myPhoto1"
                        src="syeongii.jpeg"
                        alt="My Image"
                      />
                      <div className="myPhoto2">my story</div>
                    </div>
                    <div className="easter">
                      <img
                        className="easter1"
                        src="easter.jpeg"
                        alt="My Image"
                      />
                      <span>easter</span>
                    </div>
                    <div className="uniform">
                      <img className="uniform1" src="uniform.jpeg" alt="My Image"/>
                      <span>uniform</span>
                    </div>
                    <div className="diet">
                      <img className="diet1" src="diet.jpeg" alt="My Image" />
                      <span>diet</span>
                    </div>
                    <div className="people">
                      <div className="easter">
                        <img className="easter1" src="easter.jpeg" alt="My Image"/>
                        <span>easter</span>
                      </div>
                      <div className="uniform">
                        <img className="uniform1" src="uniform.jpeg" alt="My Image"/>
                        <span>uniform</span>
                      </div>
                      <div className="diet">
                        <img className="diet1" src="diet.jpeg" alt="My Image" />
                        <span>diet</span>
                      </div>
                      <div className="people">
                        <div className="easter">
                          <img className="easter1" src="easter.jpeg" alt="My Image" />
                          <span>easter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <article>
            <div className="headName">
              <div className="profilePhoto">
                <div className="profilePhoto1">
                  <img className="uniform1" src="uniform.jpeg" alt="My Image" />
                </div>
                <div className="name">
                  <span>uniform</span>
                </div>
                <div className="dot">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
            <div className="mainPhoto">
              <img className="OT" src="ot.jpeg" alt="oggle" />
            </div>
            <div className="mainPhotoComment">
              <div className="mainPhotoIcon">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
                <i className="far fa-bookmark"></i>
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
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="date">
                    <div className="dateDay">1일 전</div>
                  </div>
                  <div className="emoticon">
                    <i className="far fa-smile"></i>
                    <input
                      className="commentBox"
                      type="text"
                      placeholeder="댓글 달기..."
                    />
                    <span className="upload">게시</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default MainSyeongii;
