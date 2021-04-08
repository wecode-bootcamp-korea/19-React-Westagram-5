import React, { Component } from "react";

class Membership extends Component {
  render() {
    return (
      <div className="memberShip">
        <p className="none">
          계정이 없으신가요?
          <a href="https://www.instagram.com/accounts/emailsignup/">
            <span className="hi">가입하기</span>
          </a>
        </p>
      </div>
    );
  }
}

export default Membership;
