import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "./app-init";

const db = getFirestore(app);
