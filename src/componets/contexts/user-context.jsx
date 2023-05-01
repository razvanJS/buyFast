import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser } from "../../utils/fierbase/firebase.utils";
import { auth } from "../../utils/fierbase/firebase.utils";



export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvaider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    // signOutUser()
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => setCurrentUser(user))
        return unsubscribe
    },
        [])


    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
}