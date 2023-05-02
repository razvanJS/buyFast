import { createContext, useEffect, useState } from "react";
import { CartDropDown } from "../cart-dropdown/cart-dropdwon.componet";


export const DropDownContext = createContext({
    cartIsOpen: false,
    setCart: () => false


})

export const DropDownProvaider = ({ children }) => {

    const [cartIsOpen, setCart] = useState(false)
    const value = { cartIsOpen, setCart }
    return (
        <DropDownContext.Provider value={value}>{children}</DropDownContext.Provider>
    )
}