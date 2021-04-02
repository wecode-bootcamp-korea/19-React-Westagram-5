import React, { Component } from "react";

class MainHeader extends Component {
  render() {
    return (
      <>
        <header>
          <div className="h1">Westagram</div>
          <div className="head">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>
          <div className="img">
            <i className="fas fa-home"></i>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <img className="profile" src="syeongii.jpeg" alt="My Image" />
          </div>
        </header>
      </>
    );
  }
}

export default MainHeader;
