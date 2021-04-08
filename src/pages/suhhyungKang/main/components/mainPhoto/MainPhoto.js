import React, { Component } from "react";

import ot from "images/suhhyungKang/ot.jpeg";
import "./MainPhoto.scss";

class MainPhoto extends Component {
  render() {
    return (
      <>
        <div className="mainPhoto">
          <img className="OT" src={ot} alt="oggle" />
        </div>
      </>
    );
  }
}

export default MainPhoto;
