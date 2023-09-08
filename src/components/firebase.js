import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXEubTSjPdQik2zT2ImsLEP-VFlNKjUiA",
  authDomain: "simlab-30604.firebaseapp.com",
  databaseURL: "https://simlab-30604-default-rtdb.firebaseio.com",
  projectId: "simlab-30604",
  storageBucket: "simlab-30604.appspot.com",
  messagingSenderId: "808651224197",
  appId: "1:808651224197:web:917284ddc304d4e36865ec",
  measurementId: "G-28W2YTQH6L",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    const { name } = additionalData;

    try {
      userRef.set(
        name,
        email,
        {createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};
