import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJgxdiBGq5S-ht80zuxAft9P1NmQ0F1eU",
  authDomain: "pairs-10b4c.firebaseapp.com",
  projectId: "pairs-10b4c",
  storageBucket: "pairs-10b4c.appspot.com",
  messagingSenderId: "702342531801",
  appId: "1:702342531801:web:769322029eaae32f618cc8",
  measurementId: "G-LC7C9SYDB0"
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db

if (typeof window !== "undefined") {
  app = app || initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getDatabase(app)

}

export { auth, db, onAuthStateChanged };
