import { Button } from "../button/button.componet"
import { FormInput } from "../form-input/form-input.component"
import { useState } from "react"
import { signinWithPasswordAndEmail } from "../../utils/fierbase/firebase.utils"
import './sign-in-form.styles.scss'



export const SingIn = ({ googleSingIn, redirectSingIn }) => {

    const [email, setEmil] = useState('')
    const [password, setPassword] = useState('')


    const onChangeHandlerEmail = (event) => setEmil(event.target.value)
    const onChangeHandlerPassword = (event) => setPassword(event.target.value)



    const submitHandler = async (event) => {
        event.preventDefault()
        try {
            const response = await signinWithPasswordAndEmail(email, password)
            setEmil('')
            setPassword('')
            console.log(response)

        }
        catch (err) {
            console.error(err)

            if (err.code === 'auth/wrong-password') alert('Password incorrect')
            else if (err.code === 'auth/user-not-found') alert('User Not Found')

        }
    }



    return (
        <div className="sing-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChangeHandlerEmail}

                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangeHandlerPassword}
                />
                <div className="button-contanier">
                    <Button type="submit" children='Sign In' />
                    <Button type='button' onClick={googleSingIn} buttonType='google' children='Google Sing In' />
                </div>
                <div className="redirect-container">
                    <Button type='button' onClick={async () => await redirectSingIn()} buttonType='redirect' children='Google Redirect' />
                </div>

            </form>







        </div>
    )
}