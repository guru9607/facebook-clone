import './post.css'
import {MoreVert} from '@mui/icons-material';
import { Users } from "../../dummyData";
import { useState } from 'react';


export default function Post({post}) {
  // const user = Users.filter((u) => {return u})
  // console.log(user)
  // const user = Users.filter(u => u.id === 1)
  // console.log(user)

  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setisLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername"> {Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImg' src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.png" alt="" onClick = {likeHandler}/>
            <img className='likeIcon' src="/assets/heart.png" alt="" onClick = {likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>

      </div>
    </div>
  )
}
