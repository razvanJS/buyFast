
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut



} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'
import { SingIn } from "../../componets/sing-in-form/sign-in-form.component";

const fierbaseConfig = {
    apiKey: "AIzaSyAvOnxgBB-0yiJMsPYTRvCczZnbNJge2E0",
    authDomain: "buyfast-react.firebaseapp.com",
    projectId: "buyfast-react",
    storageBucket: "buyfast-react.appspot.com",
    messagingSenderId: "227567606270",
    appId: "1:227567606270:web:4f7f6448a94de86234c8af"
}

const firebaseApp = initializeApp(fierbaseConfig)

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
})
export const auth = getAuth();
export const signInWithGooglePopup = function () {
    return signInWithPopup(auth, googleProvider)
}

export const signInWithGoogleRedirect = function () {
    return signInWithRedirect(auth, googleProvider)
}
export const db = getFirestore()

export const createUserDoc = async function (getAuth) {
    if (!getAuth) return
    try {
        const createDocRef = doc(db, "users", getAuth.uid)
        const usersSnapshoot = await getDoc(createDocRef)
        if (!usersSnapshoot.exists()) {
            const createdAt = new Date()
            const { displayName, email } = getAuth
            await setDoc(createDocRef, {
                displayName,
                email,
                createdAt,


            })


        }
        else {
            return createDocRef
        }




    }
    catch (err) {
        console.error('error creating user document', err.message)
    }
}

export const createUserWithEmail = async function (email, password) {

    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)







}

export const signinWithPasswordAndEmail = async function (email, password) {


    return await signInWithEmailAndPassword(auth, email, password)







}

export const signOutUser = async () => await signOut(auth)