
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAF2HntS1iHm2Wu6C51nVokWPjIar_aw9o",
  authDomain: "daisymart-538e5.firebaseapp.com",
  projectId: "daisymart-538e5",
  storageBucket: "daisymart-538e5.appspot.com",
  messagingSenderId: "790216500376",
  appId: "1:790216500376:web:35c17826c5b73ea3609ced",
  measurementId: "G-Z3TQN3XY8E"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// const analytics = getAnalytics(app);