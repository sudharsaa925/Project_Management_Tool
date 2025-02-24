// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YourKey",
  authDomain: "YourKey",
  projectId: "YourKey",
  storageBucket: "YourKey",
  messagingSenderId: "YourKey",
  appId: "YourKey",
  measurementId: "YourKey"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Export everything correctly
export { auth, googleProvider, githubProvider };
