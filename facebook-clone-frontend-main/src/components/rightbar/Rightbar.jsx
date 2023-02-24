import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="giftImg" />
          <span className="birthdayText">
            <b>Gotya</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img 
          src="/assets/ad.png" 
          alt="" 
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key = {u.id} user = {u} />
          ))}
        </ul>      
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Pune</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src={`${PF}/person/1.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Prema</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}/person/2.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Prema</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}/person/3.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Prema</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}/person/4.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Prema</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}/person/5.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Prema</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}/person/6.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Prema</span>
        </div>
      </div>
    </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
