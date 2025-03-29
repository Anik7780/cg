// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase কনফিগারেশন সেট করুন
const firebaseConfig = {
  apiKey: "AIzaSyB-D2z6yLSVolxXmVeAd5xG03zC0pzkpU8",
  authDomain: "cgbazar-a40c0.firebaseapp.com",
  projectId: "cgbazar-a40c0",
  storageBucket: "cgbazar-a40c0.appspot.com",
  messagingSenderId: "33145540262",
  appId: "1:33145540262:web:2820f803fb1548458f6e67",
  measurementId: "G-96NYF34CWB"
};

// Firebase Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
