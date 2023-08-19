import React from "react";
import Heeader from "./Header/Heeader";
import Sidebar from "./Sidebar/SideBar";
import Feed from "./Feed/Feed";
import Rightbar from "./RIghtbar/Rightbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Heeader />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
