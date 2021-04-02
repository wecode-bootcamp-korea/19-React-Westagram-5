import React, { Component } from 'react';
import MainHeader from "./components/mainheader/MainHeader";
import MainNav from "./components/mainNav/MainNav"
class MainSyeongii extends Component {
  render() {
    return (
      <>
        <MainHeader />

        <section>
          <MainNav/>
          <article>
            <div class="headName">
              <div class="profilePhoto">
                <div class="profilePhoto1">
                  <img class="uniform1" src="uniform.jpeg" alt="My Image" />
                </div>
                <div class="name">
                  <span>uniform</span>
                </div>
                <div class="dot">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
            <div class="mainPhoto">
              <img class="OT" src="ot.jpeg" alt="oggle" />
            </div>
            <div class="mainPhotoComment">
              <div class="mainPhotoIcon">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                <i class="far fa-paper-plane"></i>
                <i class="far fa-bookmark"></i>
              </div>
              <div class="likeComment">
                <div class="like">
                  좋아요 7689개
            </div>
                <div class="likeName">
                  <a class="likeName1" href="https://www.instagram.com/syeong_ii/">
                    uniform</a><span> &nbsp; OT야 안녕</span>
                  <div class="Comments">
                    <a class="likeName1" href="https://www.instagram.com/yuna_atoz/">
                      yuna_atoz</a><span>&nbsp;&nbsp;도서관이구만~</span>
                    <span class="heart" />
                    <i class="far fa-heart"></i>
                  </div>

                  <div class="date">
                    <time class="dateDay" datetime="2021-03-28">
                      1일 전</time>
                  </div>
                  <div class="emoticon">
                    <i class="far fa-smile"></i>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </>
    )
  }
}
