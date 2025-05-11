// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyALaT0x_fTxvOh5_kf3pEkDNt6KfB16IpQ",
  authDomain: "webtalk-s.firebaseapp.com",
  projectId: "webtalk-s",
  storageBucket: "webtalk-s.firebasestorage.app",
  messagingSenderId: "31651191620",
  appId: "1:31651191620:web:62d4142fa589f440add511",
  measurementId: "G-CW7G4S7XL0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
