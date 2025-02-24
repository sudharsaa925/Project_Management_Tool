// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJcqEx46zMVTt6rFth2XUYpJrU02ML7LM",
  authDomain: "project-management-tool-9e5b6.firebaseapp.com",
  projectId: "project-management-tool-9e5b6",
  storageBucket: "project-management-tool-9e5b6.firebasestorage.app",
  messagingSenderId: "802921559583",
  appId: "1:802921559583:web:89032417befdb71826c72a",
  measurementId: "G-FHNZC9C46N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Export everything correctly
export { auth, googleProvider, githubProvider };
