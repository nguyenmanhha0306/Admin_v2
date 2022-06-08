import React from "react";
import "./topbar.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            ADMIN V2 <AccountCircleIcon />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsActiveIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://i.pinimg.com/564x/96/70/3a/96703a127c4f76ac75c00e2214632150.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
