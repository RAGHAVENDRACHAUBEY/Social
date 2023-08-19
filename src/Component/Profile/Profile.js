import "./Profile.css";
import SideBar from "../Sidebar/SideBar";
import Feed from "../Feed/Feed";
import Rightbar from "../RIghtbar/Rightbar";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="../image/natural.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="../image/team-06.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ritesh D</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
