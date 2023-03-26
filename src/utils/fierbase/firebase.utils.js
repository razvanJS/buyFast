

import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'
import { Await } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyCjaKDFA8CIueHrvp96iShTwdYaekOs1dY",
    authDomain: "buy-fast-db.firebaseapp.com",
    projectId: "buy-fast-db",
    storageBucket: "buy-fast-db.appspot.com",
    messagingSenderId: "562260660934",
    appId: "1:562260660934:web:3a9b463f3265fb79a8bdc7"
};

//initializera bazei de date cu configuratia generata de FB
const app = initializeApp(firebaseConfig)

//crearea unui provaider Google
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)
    console.log(userDocRef, userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createDateSingIn = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createDateSingIn,
            })

        }
        catch (err) {
            console.error(err.message)
        }
    }



}






