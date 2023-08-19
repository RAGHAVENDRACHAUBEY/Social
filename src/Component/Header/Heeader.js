import React from "react";
import "./header.css";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Person from "@mui/icons-material/Person";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";

function Heeader() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <a href="/home">
            <span className="logo">Social</span>
          </a>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchOutlined className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <a href="/profile/:username">
            {" "}
            <img src="../image/team-06.jpg" alt="" className="topbarImg" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Heeader;
