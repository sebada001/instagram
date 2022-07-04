import app from "./app-init";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const storage = getStorage(app);
const profilePicsDatabase = ref(storage, "profile-pictures");

const uploadProfilePic = async (file, currentUser, setLoading) => {
  try {
    const fileRef = ref(storage, `profile-pictures/${currentUser.uid}.png`);
    //   setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    let photoURL = await getDownloadURL(snapshot.ref);
    console.log(photoURL);
    updateProfile(currentUser, { photoURL });
    //   setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
// const updateProfilePic = async (ref, currentUser) => {
//   console.log(ref + " bananas");
//   await updateProfile(currentUser, { photoURL: ref });
//   console.log("profile picture updated");
// };

export { profilePicsDatabase, uploadProfilePic, storage };
