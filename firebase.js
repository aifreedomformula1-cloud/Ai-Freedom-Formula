// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFFqKzO3sCjZEAyYZCMoTTujkWP_rTDZw",
  authDomain: "ai-freedom-formula.firebaseapp.com",
  projectId: "ai-freedom-formula",
  storageBucket: "ai-freedom-formula.firebasestorage.app",
  messagingSenderId: "239889566140",
  appId: "1:239889566140:web:b468abd706b109ec2cc3b9",
  measurementId: "G-D5EQ4W0LJY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
