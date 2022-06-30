import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import right from "../svg/right.svg";
import left from "../svg/left.svg";
import circle from "../svg/circle.svg";

function FeedPost(props) {
  const { postImage, posterProfileImage, posterUsername } = props;

  return (
    <div className="Post">
      <div id="feed-post">
        <img src={left} className="left" alt="left" />
        <img src={top} className="top" alt="top" />
        <img src={bottom} className="bottom" alt="bottom" />
        <img src={bottom} className="inner-bottom" alt="inner-bottom" />
        <img src={right} className="right" alt="right" />
        <div className="title-post">
          <img src={circle} className="circle" alt="circle" />
          <div className="profile-container">
            <img src={posterProfileImage} className="sonic" alt="sonic" />
          </div>
          <h3>{posterUsername}</h3>
        </div>
        <div className="image-post">
          <img src={postImage} className="opm" alt="opm" />
        </div>
      </div>
    </div>
  );
}
export default FeedPost;
