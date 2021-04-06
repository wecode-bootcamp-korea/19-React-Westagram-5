import React, { Component } from "react";

import syeongii from "images/suhhyungKang/syeongii.jpeg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch,faHome,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faCompass,faHeart } from "@fortawesome/free-regular-svg-icons";

import './MainHeader.scss'

class MainHeader extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="headerBox">
          <div className="h1">Westagram</div>
          <div className="head">
          <FontAwesomeIcon icon={faSearch} className="faSearch" />
            <input type="text" placeholder="검색" />
          </div>
          <div className="img">
          <FontAwesomeIcon icon={faHome} className="faHome" />
          <FontAwesomeIcon icon={faPaperPlane} className="faPaperPlane" />
          <FontAwesomeIcon icon={faCompass} className="faCompass" />
          <FontAwesomeIcon icon={faHeart} className="faHeart" />
          <img className="profile" src={syeongii} alt="syeongii" />
          </div>
          </div>
        </header>
      </>
    );
  }
}

export default MainHeader;
