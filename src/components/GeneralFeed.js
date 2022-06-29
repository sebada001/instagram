import FeedPost from "./FeedPost";
import ProfileArea from "./ProfileArea";

const GeneralFeed = function (props) {
  return (
    <div className="general-body">
      <div className="feed-area">
        <FeedPost />
      </div>
      <ProfileArea {...props} />
    </div>
  );
};
export default GeneralFeed;
