
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { DropDownContext } from "../contexts/dropdown-context";
import { DropDownProvaider } from "../contexts/dropdown-context";
import { useContext } from "react";
import "./cart-icon.styles.scss"



export const CardIcon = () => {
    const { cartIsOpen, setCart } = useContext(DropDownContext)
    const { cartCount } = useContext(DropDownContext)
    const toggleCart = () => cartIsOpen ? setCart(false) : setCart(true)

    return (
        <div onClick={toggleCart} className="cart-icon-container">
            <ShopingIcon className="shopping-icon " />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}