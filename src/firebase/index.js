import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import FIREBASE_CONFIGURATION from "./config/firebase.config";
const firebaseConfig = FIREBASE_CONFIGURATION;

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
