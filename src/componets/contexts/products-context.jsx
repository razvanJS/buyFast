import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../../utils/fierbase/firebase.utils";
import PRODUCTS from '../../shop-data.json'

export const ProductsContext = createContext({
    products: [],
    setProducts: () => []

})

export const ProductsProvaider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)

    const value = { products }
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )

}
