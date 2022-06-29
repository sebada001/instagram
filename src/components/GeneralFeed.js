import FeedPost from "./FeedPost";
import ProfileArea from "./ProfileArea";

const GeneralFeed = function () {
  return (
    <div className="general-body">
      <div className="feed-area">
        <FeedPost />
      </div>
      <div>
        <ProfileArea />
      </div>
    </div>
  );
};
export default GeneralFeed;
