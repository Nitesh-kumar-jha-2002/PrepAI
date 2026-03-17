
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepai-f315d.firebaseapp.com",
  projectId: "prepai-f315d",
  storageBucket: "prepai-f315d.firebasestorage.app",
  messagingSenderId: "415715294660",
  appId: "1:415715294660:web:bad1fa60c34211504df891"  
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}