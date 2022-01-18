import React from "react";

import SearchIcon from "../../assets/icons/search.svg";
import NotificationIcon from "../../assets/icons/new.svg";
import UserIcon from "../../assets/images/user.png";

import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="header-title">Xiwang</h2>
        <div className="login-details">
          <div className="searchbar">
            <img src={SearchIcon} alt="" />
            <img src={NotificationIcon} alt="" />
          </div>
          <div className="user-info">
            <h3 className="user-name">Jones Ferdinand</h3>
            <img src={UserIcon} className="user-image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
