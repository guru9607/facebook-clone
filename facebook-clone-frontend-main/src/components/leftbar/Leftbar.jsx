import "./leftbar.css"
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <MessageRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <GroupRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <BookmarkRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Bookmark</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutlineRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutlineRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <EventRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <SchoolRoundedIcon className = "leftbarListIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map(u => (
            <CloseFriend  key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
