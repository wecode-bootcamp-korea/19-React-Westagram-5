import React, { Component } from "react";

import uniform from "images/suhhyungKang/uniform.jpeg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

import "./MainHeadName.scss";

class MainHeadName extends Component {
  render() {
    return (
      <>
        <div className="headName">
          <div className="profilePhoto">
            <div className="profilePhoto1">
              <img className="uniform1" src={uniform} alt="syeongii" />
            </div>
            <div className="name">
              <span>uniform</span>
            </div>
            <div className="dot">
              <FontAwesomeIcon icon={faEllipsisH} className="ellipsis" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainHeadName;
