import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCD_hL142QYUITnB385HXgVE41fMALi7ac",
  authDomain: "allaboutfood-463c8.firebaseapp.com",
  databaseURL: "https://allaboutfood-463c8-default-rtdb.firebaseio.com",
  projectId: "allaboutfood-463c8",
  storageBucket: "allaboutfood-463c8.appspot.com",
  messagingSenderId: "104123492503",
  appId: "1:104123492503:web:31eb1d134bf2207eb6e1d2",
  measurementId: "G-GVL25K3KYN",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
