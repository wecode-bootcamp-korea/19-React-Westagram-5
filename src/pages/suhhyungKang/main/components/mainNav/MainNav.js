import React, { Component } from "react";

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
                      src="syeongii.jpeg"
                      alt="My Image"
                    />
                    <div className="myPhoto2">my story</div>
                  </div>
                  <div className="easter">
                    <img className="easter1" src="easter.jpeg" alt="My Image" />
                    <span>easter</span>
                  </div>
                  <div className="uniform">
                    <img
                      className="uniform1"
                      src="uniform.jpeg"
                      alt="My Image"
                    />
                    <span>uniform</span>
                  </div>
                  <div className="diet">
                    <img className="diet1" src="diet.jpeg" alt="My Image" />
                    <span>diet</span>
                  </div>
                  <div className="people">
                    <div className="easter">
                      <img
                        className="easter1"
                        src="easter.jpeg"
                        alt="My Image"
                      />
                      <span>easter</span>
                    </div>
                    <div className="uniform">
                      <img
                        className="uniform1"
                        src="uniform.jpeg"
                        alt="My Image"
                      />
                      <span>uniform</span>
                    </div>
                    <div className="diet">
                      <img className="diet1" src="diet.jpeg" alt="My Image" />
                      <span>diet</span>
                    </div>
                    <div className="people">
                      <div className="easter">
                        <img
                          className="easter1"
                          src="easter.jpeg"
                          alt="My Image"
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
