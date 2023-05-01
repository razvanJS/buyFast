

import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { SingIn } from '../../componets/sing-in-form/sign-in-form.component'
import { SingUp } from '../../componets/sing-up-form/sign-up-form.component'
import './authentification.styles.scss'
import { useContext, useState } from 'react'
// import { UserContext } from '../../componets/contexts/user-context'


import {
    auth,
    signInWithGooglePopup,
    createUserDoc,
    signInWithGoogleRedirect



} from "../../utils/fierbase/firebase.utils"


export const Authentification = () => {

    // const { currentUser, setCurrentUser } = useContext(UserContext)
    useEffect(() => {
        const getRedirectResultFromGoogle = async function () {
            const response = await getRedirectResult(auth)
            if (!response) return
            await createUserDoc(response.user)
            // console.log(response)
            // setCurrentUser(response)

        }
        getRedirectResultFromGoogle()

    }, [])




    const signInWithGoogle = async () => {
        try {

            const response = await signInWithGooglePopup();
            const docUsers = await createUserDoc(response.user)
            // setCurrentUser(response)





        }
        catch (err) {
            console.error('Sing In With Google Error', err.message)

        }
    }



    return <div className='auth_container'>


        <SingIn googleSingIn={signInWithGoogle} redirectSingIn={signInWithGoogleRedirect} />
        <br /> <br /><br /> <br />
        <SingUp />




    </div >
}