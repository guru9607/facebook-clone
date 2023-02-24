import "./closeFriend.css";


export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftbarFriend">
      <img src ={PF+user.profilePicture} alt="" className="leftbarFriendImg" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
