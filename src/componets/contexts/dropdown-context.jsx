import { createContext, useState, useEffect } from "react";

export const DropDownContext = createContext({
    cartIsOpen: false,
    setCart: () => false,
    cartItem: [],
    addToCart: () => { },
    cartCount: 0,
    setCartCount: () => { },
    priceTotal: 0,
    setPriceTotal: () => { }





})


const addToCartHelper = (cartItem, productToAdd) => {
    let arr = []

    const existingValueInCartItem = cartItem.find(item => item.id === productToAdd.id)

    if (existingValueInCartItem) {
        const newArr = cartItem.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
        return newArr
    }


    else {
        arr.push(...cartItem, { ...productToAdd, quantity: 1 })

        return arr
    }
}

const removeItemFn = (cartItem, item) => {
    const findObj = cartItem.find(el => el.id === item.id)
    const cartItemUpdate = [...cartItem]
    cartItemUpdate.splice(cartItemUpdate.indexOf(findObj), 1)
    return cartItemUpdate
}
const decremetQunatiyHelper = (cartItem, item) => {

    const findObj = cartItem.find(el => el.id === item.id)


    if (findObj.quantity > 1) {
        const cartItemUpdate = cartItem.map(el => el.id === item.id ? { ...el, quantity: findObj.quantity - 1 } : el)
        return cartItemUpdate
    }
    else {
        return removeItemFn(cartItem, item)
    }


}


const removeCartHelper = (cartItem, item) => removeItemFn(cartItem, item)

const priceUpdateHelper = (cartItem, item) => {
    const findObjInCartArray = cartItem.find(el => el.id === item.id)
    if (findObjInCartArray) {

        return cartItem.map(el => item.quaity > 1 ? { ...el, price: item.quantity * item.price } : item)
    }




}

export const DropDownProvaider = ({ children }) => {

    const [cartIsOpen, setCart] = useState(false)
    const [cartItem, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [priceTotal, setPriceTotal] = useState(0)



    useEffect(() => {
        const priceUpdate = cartItem.map(value => value.priceTotal = value.quantity * value.price)
        setCartCount(priceUpdate)
    }, [cartItem])

    useEffect(() => {

        const newCartCount = cartItem.reduce((acc, value) => acc + value.quantity, 0)
        setCartCount(newCartCount)


    }, [cartItem])



    useEffect(() => {
        const newPriceTotal = cartItem.reduce((acc, value) => acc + value.priceTotal, 0)
        setPriceTotal(newPriceTotal)
    }, [cartItem])


    const addToCart = (productToAdd) => setCartItems(addToCartHelper(cartItem, productToAdd))
    const decremetQunatity = (item) => setCartItems(decremetQunatiyHelper(cartItem, item))
    const removeCart = (item) => setCartItems(removeCartHelper(cartItem, item))



    const value = { cartIsOpen, setCart, cartItem, addToCart, cartCount, decremetQunatity, removeCart, priceTotal }
    return (
        <DropDownContext.Provider value={value}>{children}</DropDownContext.Provider>
    )
}