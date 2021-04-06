import React, { Component } from "react";
import MainHeader from "./components/mainHeader/MainHeader";
import MainNav from "./components/mainNav/MainNav";
import MainHeadName from "./components/mainHeadName/MainHeadName";
import MainPhoto from "./components/mainPhoto/MainPhoto";

import "./MainSyeongii.scss";
import "./components/mainHeader/MainHeader.scss";
import MainPhotoComment from "./components/mainPhotoComment/MainPhotoComment";

class MainSyeongii extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <section className="section">
          <MainNav />
          <article className="article">
            <MainHeadName />
            <MainPhoto />
            <MainPhotoComment />
          </article>
        </section>
      </>
    );
  }
}

export default MainSyeongii;
