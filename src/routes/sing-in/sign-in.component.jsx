
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/fierbase/firebase.utils"


export const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        const docUserRef = createUserDocumentFromAuth(response.user)
    }
    return <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser} >Sign in with Google Popup</button>

    </div>
}