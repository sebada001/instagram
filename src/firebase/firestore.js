import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from "./app-init";

const db = getFirestore(app);
const postsRef = collection(db, "All Posts");

const createPost = async (img, profileImg, username) => {
  try {
    const docRef = await addDoc(postsRef, {
      postImage:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/testingimage.jpg?alt=media&token=0d66dd18-63df-4ff8-bfb5-18b0a9330cc8",
      posterProfileImage:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9",
      posterUsername: "anonjohnsa",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getPosts = async () => {
  const querySnapshot = await getDocs(postsRef);
  const arr = [];
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  return arr;
};

export { createPost, getPosts };
