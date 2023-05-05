
import "./checkout.styles.scss"
import { DropDownContext } from "../../componets/contexts/dropdown-context"
import { useContext } from "react"
import { CheckoutItem } from "../../componets/checkout-item/checkout-item.component"


export const Checkout = () => {
    const { cartItem, priceTotal } = useContext(DropDownContext)


    return (
        <div className="checkout-container">

            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Total Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItem.map(item => {
                    return <CheckoutItem key={item.id} item={item} />
                })
            }
            <span className="total">Total:${priceTotal}</span>
        </div>

    )
}