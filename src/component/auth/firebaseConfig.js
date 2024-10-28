    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABaXXkaq6MPBRbK-vdgdHMhwS3msZopcQ",
  authDomain: "bastiblast-hub.firebaseapp.com",
  projectId: "bastiblast-hub",
  storageBucket: "bastiblast-hub.appspot.com",
  messagingSenderId: "843435622232",
  appId: "1:843435622232:web:9fd351fd56ae820b766f2d",
  measurementId: "G-MBDXBDW2TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default { db }