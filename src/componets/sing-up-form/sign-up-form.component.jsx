import { useContext, useState } from "react";
import { createUserWithEmail, createUserDoc } from "../../utils/fierbase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.componet";
// import { UserContext } from "../contexts/user-context";
import './sign-up-form.styles.scss'


const formFilds = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',

}

export const SingUp = () => {
    const [inputFilds, setInputFilds] = useState(formFilds)
    const { displayName, email, password, confirmPassword } = inputFilds
    // const { currentUser } = useContext(UserContext)



    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Password and confirm password don`t match');
            return;

        }
        try {
            const response = await createUserWithEmail(email, password)
            const { user } = response

            user.displayName = displayName
            const createDoc = await createUserDoc(user)
            setInputFilds(formFilds);
            // console.log(currentUser, 'Sing Up Form')


        }
        catch (err) {

            console.error(err)
            if (err.code === 'auth/email-already-in-use') alert("Email is already in use")


        }





    }

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputFilds(() => {
            const obj = {
                ...inputFilds, [name]: value
            }

            return obj

        })


    }






    return (
        <div className="sign-up-container">
            <h2>Don`t have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    label="Display Name:"
                    name="displayName"
                    type='text'
                    value={displayName}
                    onChange={onChangeHandler}

                />

                <FormInput
                    label="Email:"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChangeHandler}
                />
                <FormInput
                    label="Password:"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChangeHandler}
                />
                <FormInput
                    label="Confirm Password:"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={onChangeHandler}
                />

                <Button children='Sing Up' type='submit' />



            </form>
        </div >
    )
}
