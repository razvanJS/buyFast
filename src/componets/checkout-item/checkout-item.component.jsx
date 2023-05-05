import './checkout-item.styles.scss'
import { DropDownContext } from '../contexts/dropdown-context'
import { useContext, useEffect } from 'react'

export const CheckoutItem = ({ item }) => {
    const { addToCart, decremetQunatity, removeCart } = useContext(DropDownContext)
    const { name, imageUrl, price, quantity, priceTotal } = item

    const removeCartItem = () => removeCart(item)
    const incrementQuantityItem = () => addToCart(item)
    const decremetQunatityItem = () => decremetQunatity(item)

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={decremetQunatityItem} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={incrementQuantityItem} className="arrow">&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='price'>{priceTotal}</span>
            <div onClick={removeCartItem} className='remove-button'>&#10005;</div>


        </div>
    )
}