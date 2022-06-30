import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import right from "../svg/right.svg";
import left from "../svg/left.svg";
import circle from "../svg/circle.svg";
import pic from "../img/sc.jpg";
import opm from "../img/opm.png";

const postImage =
  "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/testingimage.jpg?alt=media&token=0d66dd18-63df-4ff8-bfb5-18b0a9330cc8";
const postProfileImage =
  "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9";

function FeedPost() {
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
            <img src={postProfileImage} className="sonic" alt="sonic" />
          </div>
          <h3>User - Title</h3>
        </div>
        <div className="image-post">
          <img src={postImage} className="opm" alt="opm" />
        </div>
      </div>
    </div>
  );
}
export default FeedPost;
