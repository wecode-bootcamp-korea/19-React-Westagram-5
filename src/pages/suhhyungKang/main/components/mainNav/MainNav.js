import React, { Component } from "react";

import diet from "images/suhhyungKang/diet.jpeg";
import easter from "images/suhhyungKang/easter.jpeg";
import uniform from "images/suhhyungKang/uniform.jpeg";
import syeongii from "images/suhhyungKang/syeongii.jpeg";
 import "./MainNav.scss";



class MainNav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="followers">
            <ul className="listPeople">
              <li>
                <div className="people">
                  <div className="myPhoto">
                    <img
                      className="myPhoto1"
                      src={syeongii}
                      alt="syeongii"
                    />
                    <div className="myPhoto2">my story</div>
                  </div>
                  <div className="easter">
                    <img className="easter1" src={easter} alt="syeongii" />
                    <span>easter</span>
                  </div>
                  <div className="uniform">
                    <img
                      className="uniform1"
                      src={uniform}
                      alt="syeongii"
                    />
                    <span>uniform</span>
                  </div>
                  <div className="diet">
                    <img className="diet1" src={diet} alt="syeongii" />
                    <span>diet</span>
                  </div>
                  <div className="people">
                    <div className="easter">
                      <img
                        className="easter1"
                        src={easter}
                        alt="syeongii"
                      />
                      <span>easter</span>
                    </div>
                    <div className="uniform">
                      <img
                        className="uniform1"
                        src={uniform}
                        alt="syeongii"
                      />
                      <span>uniform</span>
                    </div>
                    <div className="diet">
                      <img className="diet1" src={diet} alt="syeongii" />
                      <span>diet</span>
                    </div>
                    <div className="people">
                      <div className="easter">
                        <img
                          className="easter1"
                          src={easter}
                          alt="syeongii"
                        />
                        <span>easter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default MainNav;
