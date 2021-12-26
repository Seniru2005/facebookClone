import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCamwQUaE798uHp4vtweOudV-d2XBO6f_8",
  authDomain: "facebook-dd21b.firebaseapp.com",
  projectId: "facebook-dd21b",
  storageBucket: "facebook-dd21b.appspot.com",
  messagingSenderId: "808904479421",
  appId: "1:808904479421:web:fa73bca17104e7cb90ddd4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
