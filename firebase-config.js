// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAN7-FlPjKA1rpDoE0mCcX0JEnaArN1Mz8",
  authDomain: "grtv1-7ee83.firebaseapp.com",
  databaseURL: "https://grtv1-7ee83-default-rtdb.firebaseio.com",
  projectId: "grtv1-7ee83",
  storageBucket: "grtv1-7ee83.firebasestorage.app",
  messagingSenderId: "677952199254",
  appId: "1:677952199254:web:1a65042fc975214aecb9f7",
  measurementId: "G-N6BZJS4BGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };