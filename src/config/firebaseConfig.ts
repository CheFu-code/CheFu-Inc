import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirebaseClientConfig } from "../lib/env";

const firebaseConfig = getFirebaseClientConfig();

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics =
    typeof window !== "undefined" && firebaseConfig.measurementId
        ? getAnalytics(app)
        : null;
export { auth, db, storage, analytics };
