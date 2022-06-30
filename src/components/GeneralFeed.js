import FeedPost from "./FeedPost";
import ProfileArea from "./ProfileArea";
import { createPost, getPosts } from "../firebase/firestore";
import { useState, useEffect } from "react";

// const postImage =
//   "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/testingimage.jpg?alt=media&token=0d66dd18-63df-4ff8-bfb5-18b0a9330cc8";
// const posterProfileImage =
//   "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9";
// const posterUsername = "anonjohn";

// const object1 = {
//   postImage:
//     "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/testingimage.jpg?alt=media&token=0d66dd18-63df-4ff8-bfb5-18b0a9330cc8",
//   posterProfileImage:
//     "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9",
//   posterUsername: "anonjohn",
// };
// const object2 = {
//   postImage:
//     "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/Screen%20Shot%202022-06-30%20at%205.05.30%20PM.png?alt=media&token=1cb44f05-b98b-456f-9bb3-c881d0bbfcff",
//   posterProfileImage:
//     "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9",
//   posterUsername: "anonjohnz",
// };

// const array = [];

// array.push(object1);
// array.push(object2);

const GeneralFeed = function (props) {
  const [posts, setPosts] = useState([]);

  async function getData() {
    let posts = await getPosts();
    return posts;
  }

  useEffect(() => {
    const handlePosts = async () => {
      let arr = await getData();
      setPosts(arr);
    };
    return handlePosts;
  });

  return (
    <div className="general-body">
      <div className="feed-area">
        {posts.map((item, index) => {
          return (
            <FeedPost
              key={index}
              postImage={item.postImage}
              posterProfileImage={item.posterProfileImage}
              posterUsername={item.posterUsername}
            />
          );
        })}
      </div>
      <ProfileArea {...props} />
    </div>
  );
};
export default GeneralFeed;
